using System;
using System.Collections.Generic;

namespace EcommerceSearchFunction
{
    // 1. Product Class Model
    public class Product : IComparable<Product>
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }

        // Required to sort items easily for Binary Search
        public int CompareTo(Product other)
        {
            if (other == null) return 1;
            return this.ProductId.CompareTo(other.ProductId);
        }
    }

    // 2. Core Search Algorithms Class
    public static class SearchEngine
    {
        // LINEAR SEARCH: Scans one by one. Time Complexity: O(n)
        public static Product LinearSearch(Product[] products, int targetId)
        {
            foreach (var product in products)
            {
                if (product.ProductId == targetId)
                {
                    return product; // Found
                }
            }
            return null; // Not found
        }

        // BINARY SEARCH: Divides and conquers. Assumes array is sorted. Time Complexity: O(log n)
        public static Product BinarySearch(Product[] products, int targetId)
        {
            int left = 0;
            int right = products.Length - 1;

            while (left <= right)
            {
                int mid = left + (right - left) / 2;

                if (products[mid].ProductId == targetId)
                {
                    return products[mid]; // Found
                }

                if (products[mid].ProductId < targetId)
                {
                    left = mid + 1; // Search right half
                }
                else
                {
                    right = mid - 1; // Search left half
                }
            }
            return null; // Not found
        }
    }
}