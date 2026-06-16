using System;
using EcommerceSearchFunction;

Console.WriteLine("=== Starting E-commerce Search Optimization Verification ===");
Console.WriteLine();

// Step A: Setup setup mockup product inventory list (Unsorted explicitly)
Product[] inventory = new Product[]
{
    new Product { ProductId = 105, ProductName = "Wireless Mouse", Category = "Electronics" },
    new Product { ProductId = 101, ProductName = "Mechanical Keyboard", Category = "Electronics" },
    new Product { ProductId = 108, ProductName = "Ergonomic Office Chair", Category = "Furniture" },
    new Product { ProductId = 103, ProductName = "4K Gaming Monitor", Category = "Electronics" },
    new Product { ProductId = 102, ProductName = "USB-C Hub Adapter", Category = "Accessories" }
};

int targetId = 103;

// --- Test 1: Linear Search ---
Console.WriteLine($"[Executing]: Linear Search for Product ID {targetId}...");
Product result1 = SearchEngine.LinearSearch(inventory, targetId);

if (result1 != null)
{
    Console.WriteLine($"SUCCESS: Found target item -> Name: {result1.ProductName} | Category: {result1.Category}");
}
else
{
    Console.WriteLine("NOT FOUND: Item missing via Linear execution path.");
}

Console.WriteLine("----------------------------------------------------------------------");

// --- Test 2: Binary Search ---
// CRITICAL STEP: Binary search requires sorted keys array baseline structure!
Console.WriteLine("[System Action]: Quick-sorting baseline collection arrays by ID keys...");
Array.Sort(inventory);

Console.WriteLine($"[Executing]: Binary Search for Product ID {targetId}...");
Product result2 = SearchEngine.BinarySearch(inventory, targetId);

if (result2 != null)
{
    Console.WriteLine($"SUCCESS: Found target item -> Name: {result2.ProductName} | Category: {result2.Category}");
}
else
{
    Console.WriteLine("NOT FOUND: Item missing via Binary execution path.");
}

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();