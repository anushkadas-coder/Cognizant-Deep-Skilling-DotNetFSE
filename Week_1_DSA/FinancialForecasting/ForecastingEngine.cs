using System;

namespace FinancialForecasting
{
    public static class ForecastingEngine
    {
        /// <summary>
        /// Calculates the future financial value using a recursive algorithm.
        /// Formula: Future Value = Present Value * (1 + Growth Rate)^Years
        /// Time Complexity: O(n) where n is the number of years.
        /// Space Complexity: O(n) due to stack frames in recursive calls.
        /// </summary>
        public static double CalculateFutureValue(double presentValue, double growthRate, int years)
        {
            // Base Case: If years remaining is 0, the value is just the present value.
            if (years == 0)
            {
                return presentValue;
            }

            // Recursive Case: Calculate the value for (years - 1) and apply growth rate for the current year
            return CalculateFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
        }
    }
}