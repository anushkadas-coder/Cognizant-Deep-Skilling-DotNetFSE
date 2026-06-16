using System;
using FinancialForecasting;

Console.WriteLine("=== Starting Financial Forecasting Verification ===");
Console.WriteLine();

// Baseline investment setup variables
double initialInvestment = 100000.00; // 1 Lakh INR Base Capital
double annualGrowthRate = 0.08;       // 8% Expected Annual Growth Rate

Console.WriteLine($"[Market Conditions]: Present Value Asset Base = {initialInvestment:N2} INR");
Console.WriteLine($"[Market Conditions]: Multi-Node Growth Target = {annualGrowthRate * 100}% Annually");
Console.WriteLine();

// Let's test predictions across multiple year metrics using our recursive algorithm
int[] targetYears = { 1, 3, 5, 10 };

foreach (int years in targetYears)
{
    Console.WriteLine($"[Computing]: Evaluating recursive stack iteration for a {years}-Year timeline...");
    double predictedValue = ForecastingEngine.CalculateFutureValue(initialInvestment, annualGrowthRate, years);

    Console.WriteLine($"  --> Projected Future Asset Capitalization: {predictedValue:N2} INR");
    Console.WriteLine("----------------------------------------------------------------------");
}

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();