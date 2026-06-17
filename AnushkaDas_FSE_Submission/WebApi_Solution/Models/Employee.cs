namespace FirstWebApi.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Salary { get; set; }
        public bool Permanent { get; set; }
        public string Department { get; set; } // Simplified
        public List<string> Skills { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}