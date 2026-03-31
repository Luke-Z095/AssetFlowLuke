package com.example.group3.insights.Service.impl;

import com.example.group3.analytics.dto.AllocationItemResponse;
import com.example.group3.analytics.dto.DashboardFullResponse;
import com.example.group3.analytics.dto.RiskAlertResponse;
import com.example.group3.analytics.dto.TopHoldingItemResponse;
import com.example.group3.dashboard.Service.DashboardService;
import com.example.group3.insights.Service.PortfolioInsightService;
import com.example.group3.insights.dto.InsightSummaryResponse;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class PortfolioInsightServiceImpl implements PortfolioInsightService {

    private final DashboardService dashboardService;

    public PortfolioInsightServiceImpl(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @Override
    public InsightSummaryResponse generateSummary() {
        DashboardFullResponse dashboard = dashboardService.getFullDashboard();

        InsightSummaryResponse response = new InsightSummaryResponse();
        response.setSummaryText(buildSummaryText(dashboard));
        response.setHighlights(buildHighlights(dashboard));
        response.setSuggestions(buildSuggestions(dashboard));

        return response;
    }

    private String buildSummaryText(DashboardFullResponse dashboard) {
        String riskLevel = dashboard.getRiskLevel() == null ? "UNKNOWN" : dashboard.getRiskLevel();
        Integer score = dashboard.getDiversificationScore() == null ? 0 : dashboard.getDiversificationScore();

        BigDecimal returnPct = BigDecimal.ZERO;
        BigDecimal totalMarketValue = BigDecimal.ZERO;

        if (dashboard.getSummary() != null) {
            if (dashboard.getSummary().getReturnPct() != null) {
                returnPct = dashboard.getSummary().getReturnPct();
            }
            if (dashboard.getSummary().getTotalMarketValue() != null) {
                totalMarketValue = dashboard.getSummary().getTotalMarketValue();
            }
        }

        String performanceText;
        if (returnPct.compareTo(BigDecimal.ZERO) > 0) {
            performanceText = "a positive unrealized return of " + returnPct.toPlainString() + "%";
        } else if (returnPct.compareTo(BigDecimal.ZERO) < 0) {
            performanceText = "a negative unrealized return of " + returnPct.toPlainString() + "%";
        } else {
            performanceText = "a neutral unrealized return of 0%";
        }

        return "Your portfolio currently has a " + riskLevel.toLowerCase()
                + " risk level, a total market value of "
                + totalMarketValue.toPlainString()
                + ", and " + performanceText
                + ". The diversification score is "
                + score + ".";
    }

    private List<String> buildHighlights(DashboardFullResponse dashboard) {
        List<String> highlights = new ArrayList<>();

        if (dashboard.getSummary() != null) {
            if (dashboard.getSummary().getTotalMarketValue() != null) {
                highlights.add("Total market value: " + dashboard.getSummary().getTotalMarketValue().toPlainString());
            }
            if (dashboard.getSummary().getUnrealizedPnl() != null) {
                highlights.add("Unrealized P&L: " + dashboard.getSummary().getUnrealizedPnl().toPlainString());
            }
            if (dashboard.getSummary().getHoldingCount() != null) {
                highlights.add("Number of holdings: " + dashboard.getSummary().getHoldingCount());
            }
        }

        TopHoldingItemResponse topHolding = getLargestHolding(dashboard);
        if (topHolding != null) {
            highlights.add("Largest holding: " + safe(topHolding.getSymbol()) +
                    " (" + valueOrZero(topHolding.getMarketValue()).toPlainString() + ")");
        }

        AllocationItemResponse largestAllocation = getLargestAllocation(dashboard);
        if (largestAllocation != null) {
            highlights.add("Largest allocation: " + safe(largestAllocation.getAssetType()) +
                    " (" + valueOrZero(largestAllocation.getWeightPct()).toPlainString() + "%)");
        }

        if (dashboard.getRiskLevel() != null) {
            highlights.add("Risk level: " + dashboard.getRiskLevel());
        }

        if (dashboard.getDiversificationScore() != null) {
            highlights.add("Diversification score: " + dashboard.getDiversificationScore());
        }

        return highlights;
    }

    private List<String> buildSuggestions(DashboardFullResponse dashboard) {
        List<String> suggestions = new ArrayList<>();

        if (dashboard.getRiskAlerts() != null) {
            for (RiskAlertResponse alert : dashboard.getRiskAlerts()) {
                if (alert.getSuggestion() != null && !alert.getSuggestion().isBlank()) {
                    suggestions.add(alert.getSuggestion());
                }
            }
        }

        if (suggestions.isEmpty()) {
            if ("HIGH".equalsIgnoreCase(dashboard.getRiskLevel())) {
                suggestions.add("Consider reducing concentration in your largest asset category.");
            } else if ("MEDIUM".equalsIgnoreCase(dashboard.getRiskLevel())) {
                suggestions.add("Review allocation balance and monitor concentration trends.");
            } else {
                suggestions.add("Continue monitoring performance and rebalance periodically if needed.");
            }
        }

        return suggestions;
    }

    private TopHoldingItemResponse getLargestHolding(DashboardFullResponse dashboard) {
        if (dashboard.getTopHoldings() == null || dashboard.getTopHoldings().isEmpty()) {
            return null;
        }
        return dashboard.getTopHoldings().get(0);
    }

    private AllocationItemResponse getLargestAllocation(DashboardFullResponse dashboard) {
        if (dashboard.getAllocation() == null || dashboard.getAllocation().isEmpty()) {
            return null;
        }

        AllocationItemResponse largest = dashboard.getAllocation().get(0);
        for (AllocationItemResponse item : dashboard.getAllocation()) {
            if (item.getWeightPct() != null && largest.getWeightPct() != null
                    && item.getWeightPct().compareTo(largest.getWeightPct()) > 0) {
                largest = item;
            }
        }
        return largest;
    }

    private BigDecimal valueOrZero(BigDecimal value) {
        return value == null ? BigDecimal.ZERO : value;
    }

    private String safe(String value) {
        return value == null ? "N/A" : value;
    }
}