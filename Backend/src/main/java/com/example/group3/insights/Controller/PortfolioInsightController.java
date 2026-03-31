package com.example.group3.insights.Controller;

import com.example.group3.insights.Service.PortfolioInsightService;
import com.example.group3.insights.dto.InsightSummaryResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/insights")
public class PortfolioInsightController {

    private final PortfolioInsightService portfolioInsightService;

    public PortfolioInsightController(PortfolioInsightService portfolioInsightService) {
        this.portfolioInsightService = portfolioInsightService;
    }

    @GetMapping("/summary")
    public InsightSummaryResponse getSummary() {
        return portfolioInsightService.generateSummary();
    }
}