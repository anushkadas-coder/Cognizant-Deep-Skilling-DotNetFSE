namespace EFCoreHandson
{
    public class Product
    {
        public int ProductId { get; set; } // Yeh apne aap Primary Key ban jayega
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
    }
}