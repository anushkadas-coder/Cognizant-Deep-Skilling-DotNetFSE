using System;
using DependencyInjectionExample;

Console.WriteLine("=== Starting Dependency Injection Verification ===");
Console.WriteLine();

// Step A: Instantiate the low-level component (The concrete dependency data provider)
ICustomerRepository databaseRepository = new CustomerRepositoryImpl();

// Step B: Inject the repository directly into the high-level service object via Constructor Injection
CustomerService consumerService = new CustomerService(databaseRepository);

// Step C: Execute operations seamlessly without the service layer knowing how the data is loaded!
Console.WriteLine("[Client Framework]: Invoking operational runtime metrics...");
consumerService.DisplayCustomerProfile("CUST-9901");

Console.WriteLine("Press Enter to exit...");
Console.ReadLine();