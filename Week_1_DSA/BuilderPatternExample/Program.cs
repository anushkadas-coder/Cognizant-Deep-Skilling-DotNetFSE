using System;
using BuilderPatternExample;

Console.WriteLine("=== Starting Builder Pattern Verification ===");
Console.WriteLine();

// 1. Building a High-End Gaming Setup (All fields populated)
Computer gamingPC = new Computer.Builder()
    .SetCPU("Intel Core i9-14900K")
    .SetRAM("32GB DDR5")
    .SetStorage("2TB NVMe SSD")
    .SetGraphicsCard("NVIDIA RTX 4090")
    .SetOS("Windows 11 Pro")
    .Build();

Console.WriteLine("[Creating] High-Performance Gaming Rig...");
gamingPC.DisplayConfiguration();

// 2. Building a Budget Office Workstation (Optional parts left out automatically)
Computer officePC = new Computer.Builder()
    .SetCPU("Intel Core i3")
    .SetRAM("8GB DDR4")
    .SetStorage("512GB SSD")
    // Left out GraphicsCard and OS to verify default attributes apply seamlessly
    .Build();

Console.WriteLine("[Creating] Standard Office PC...");
officePC.DisplayConfiguration();

Console.WriteLine("Press Enter to exit...");
Console.ReadLine();