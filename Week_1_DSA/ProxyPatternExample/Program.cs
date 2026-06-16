using System;
using ProxyPatternExample;

Console.WriteLine("=== Starting Proxy Pattern Verification ===");
Console.WriteLine();

// Client holds reference to the interface, completely unaware of the proxy layer processing!
IImage image = new ProxyImage("deepfake_detection_spectrum_analysis.png");

// FIRST CALL: Image must be loaded across network pipeline (Cache Miss)
Console.WriteLine("[Client Action]: Requesting to view image for the first time...");
image.Display();

Console.WriteLine("----------------------------------------------------------------------");

// SECOND CALL: Image should load instantly from local memory allocation (Cache Hit)
Console.WriteLine("[Client Action]: Requesting to view the exact same image again...");
image.Display();

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();