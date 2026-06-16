using System;
using ObserverPatternExample;

Console.WriteLine("=== Starting Observer Pattern Verification ===");
Console.WriteLine();

// Step A: Initialize the main monitoring engine (Subject)
StockMarket relianceStock = new StockMarket("RELIANCE", 2450.00);

// Step B: Instantiate dynamic listening client applications (Observers)
IObserver userDevice = new MobileApp("Anushka's Portfolio Tracker");
IObserver corporatePortal = new WebApp("Zetheta Management Dashboard");

// Step C: Register components to receive automated broadcast packets
Console.WriteLine("--- Registering Observers ---");
relianceStock.RegisterObserver(userDevice);
relianceStock.RegisterObserver(corporatePortal);

// Step D: Simulate Market Price Variations
relianceStock.UpdatePrice(2485.50);
relianceStock.UpdatePrice(2510.25);

Console.WriteLine("\n----------------------------------------------------------------------");

// Step E: Deregister a consumer node at runtime
Console.WriteLine("--- Dropping Web Portal Observer Connection ---");
relianceStock.DeregisterObserver(corporatePortal);

// Step F: Validate that only the active subscriber receives the updated data telemetry
relianceStock.UpdatePrice(2490.00);

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();