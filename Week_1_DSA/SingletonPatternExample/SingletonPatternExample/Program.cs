using System;
using SingletonPatternExample;

Console.WriteLine("=== Starting Singleton Pattern Verification ===");
Console.WriteLine();

// Requesting the instance for the first time
Logger logger1 = Logger.Instance;
logger1.Log("User loaded their personal data dashboard.");

Console.WriteLine("------------------------------------------------");

// Requesting the instance a second time
Logger logger2 = Logger.Instance;
logger2.Log("User executed a data sync pipeline.");

Console.WriteLine();

// Check if both references point to the exact same memory location
if (ReferenceEquals(logger1, logger2))
{
    Console.WriteLine("SUCCESS: Both variables refer to the exact same instance.");
    Console.WriteLine($"logger1 Memory Hash: {logger1.GetHashCode()}");
    Console.WriteLine($"logger2 Memory Hash: {logger2.GetHashCode()}");
}
else
{
    Console.WriteLine("FAILURE: Independent logger instances were generated.");
}

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();