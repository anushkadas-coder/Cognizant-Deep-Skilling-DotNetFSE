using System;

namespace DependencyInjectionExample
{
    // 1. Repository Interface
    public interface ICustomerRepository
    {
        string FindCustomerById(string id);
    }

    // 2. Concrete Repository Implementation (Simulating database interactions)
    public class CustomerRepositoryImpl : ICustomerRepository
    {
        public string FindCustomerById(string id)
        {
            // Simulating data layer lookup query strings
            if (id == "CUST-9901")
            {
                return "Anushka Das | Tier: Premium Developer | Status: Active";
            }
            return "Customer Record Not Found in Node Cache.";
        }
    }

    // 3. Service Class: Depends purely on the abstraction interface, not the concrete implementation!
    public class CustomerService
    {
        private readonly ICustomerRepository _customerRepository;

        // Constructor Injection: The dependency is passed into the service at runtime
        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public void DisplayCustomerProfile(string id)
        {
            Console.WriteLine($"[Service Layer]: Initiating metadata retrieval requests for ID: {id}...");
            string profileDetails = _customerRepository.FindCustomerById(id);

            Console.WriteLine("----------------------------------------------------------------------");
            Console.WriteLine($"[Data Found]: {profileDetails}");
            Console.WriteLine("----------------------------------------------------------------------\n");
        }
    }
}