using System;
using System.Linq;
using EFCoreHandson;

Console.WriteLine("=== EF Core Retail Inventory System (Full Automation) ===");

using (var context = new AppDbContext())
{
    // === LAB 4: Inserting Data ===
    if (!context.Products.Any())
    {
        Console.WriteLine("\n[Lab 4] Database empty. Inserting initial items...");
        context.Products.AddRange(
            new Product { Name = "Gaming Laptop", Price = 95000.00m, StockQuantity = 10 },
            new Product { Name = "Wireless Mouse", Price = 1500.00m, StockQuantity = 50 },
            new Product { Name = "Mechanical Keyboard", Price = 4500.00m, StockQuantity = 25 }
        );
        context.SaveChanges();
        Console.WriteLine("Initial data inserted!");
    }

    // === LAB 5: Retrieving Data ===
    Console.WriteLine("\n[Lab 5] Current Inventory Records:");
    Console.WriteLine("--------------------------------------------------");
    foreach (var p in context.Products.ToList())
    {
        Console.WriteLine($"ID: {p.ProductId} | Name: {p.Name} | Price: {p.Price} | Stock: {p.StockQuantity}");
    }
    Console.WriteLine("--------------------------------------------------");

    // === LAB 6: Updating and Deleting Records ===
    Console.WriteLine("\n[Lab 6] Performing Update and Delete Operations...");

    // 1. UPDATE: Wireless Mouse (ID: 2) ka stock badha kar 65 karte hain
    var productToUpdate = context.Products.FirstOrDefault(p => p.ProductId == 2);
    if (productToUpdate != null)
    {
        productToUpdate.StockQuantity = 65; // Modifying memory state
        Console.WriteLine($"-> Updated Stock for {productToUpdate.Name} to 65.");
    }

    // 2. DELETE: Mechanical Keyboard (ID: 3) ko inventory se remove karte hain
    var productToDelete = context.Products.FirstOrDefault(p => p.ProductId == 3);
    if (productToDelete != null)
    {
        context.Products.Remove(productToDelete); // Staging removal
        Console.WriteLine($"-> Removed {productToDelete.Name} from inventory.");
    }

    // Saving changes to make updates permanent in SQL Server
    context.SaveChanges();
    Console.WriteLine("✅ Changes successfully pushed to SQL Server!");

    // === LAB 7: Writing Queries with LINQ ===
    Console.WriteLine("\n[Lab 7] Running Premium Filter Query (Price > 5000):");

    // LINQ Expression to filter high value assets
    var premiumProducts = context.Products.Where(p => p.Price > 5000).ToList();

    Console.WriteLine("--------------------------------------------------");
    foreach (var p in premiumProducts)
    {
        Console.WriteLine($"PREMIUM ITEM -> Name: {p.Name} | Price: {p.Price}");
    }
    Console.WriteLine("--------------------------------------------------");
}

Console.WriteLine("\nPress any key to exit...");
Console.ReadKey();