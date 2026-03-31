package com.example.group3.market.provider;

import com.example.group3.Asset.Entity.Asset;
import com.example.group3.Asset.Mapper.AssetMapper;
import com.example.group3.market.dto.PriceResponseDTO;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class FinnhubMarketDataProvider implements MarketDataProvider {

    private final AssetMapper assetMapper;
    private final RestTemplate restTemplate;

    @Value("${finnhub.api-key}")
    private String apiKey;

    @Value("${finnhub.api-url}")
    private String apiUrl;

    /**
     * 从 Finnhub 获取真实股票价格
     * @param assetId 资产ID（数据库ID）
     */
    @Override
    public PriceResponseDTO fetchPrice(Long assetId) {
        // ====================== 关键步骤 1 ======================
        // 1. 根据 assetId 从数据库查询 symbol（调用你的 mapper）
        // ======================================================
        Asset asset = assetMapper.findById(assetId);
        if (asset == null) {
            throw new RuntimeException("资产不存在，assetId=" + assetId);
        }
        String symbol = asset.getSymbol(); // 拿到股票代码 eg: AAPL
        String currency = asset.getCurrency(); // 货币（从资产表取）

        // ====================== 关键步骤 2 ======================
        // 2. 使用 symbol 调用 Finnhub API 获取真实价格
        // ======================================================
        String url = apiUrl + "/quote?symbol=" + symbol + "&token=" + apiKey;
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);
        BigDecimal price = new BigDecimal(response.get("c").toString());

        // 封装返回
        PriceResponseDTO dto = new PriceResponseDTO();
        dto.setAssetId(assetId);
        dto.setSnapshotDate(LocalDate.now());
        dto.setPrice(price);
        dto.setCurrency(currency); // 从资产表取，更准确
        dto.setSource("FINNHUB");
        dto.setFetchedAt(LocalDateTime.now());

        return dto;
    }
}
