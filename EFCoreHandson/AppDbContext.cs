using Microsoft.EntityFrameworkCore;

namespace EFCoreHandson
{
    // Inheriting from DbContext turns this class into our database control center
    public class AppDbContext : DbContext
    {
        // This maps our C# 'Product' class to a SQL table named 'Products'
        public DbSet<Product> Products { get; set; }

        // Configuring the local SQL Express connection stream
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Using the exact local server instance from our previous SQL hands-on
            optionsBuilder.UseSqlServer(@"Server=(local)\SQLEXPRESS;Database=RetailInventoryDB;Trusted_Connection=True;TrustServerCertificate=True;");
        }
    }
}