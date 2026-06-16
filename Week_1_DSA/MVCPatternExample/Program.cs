using System;
using MVCPatternExample;

Console.WriteLine("=== Starting MVC Pattern Verification ===");
Console.WriteLine();

// Step A: Fetch an initial mock record from our database layer (The Model)
Student model = new Student { Id = "FSE-2026-042", Name = "Anushka Das", Grade = "A+" };

// Step B: Set up the Presentation Layer interface (The View)
StudentView view = new StudentView();

// Step C: Interlink everything through the system manager (The Controller)
StudentController controller = new StudentController(model, view);

// Display the baseline state directly from storage metadata
Console.WriteLine("[System Status]: Rendering baseline student profile view...");
controller.UpdateView();

// Step D: Mutate values using controller channels safely
Console.WriteLine("[Data Entry]: Processing semester review evaluation upgrades via Controller...");
controller.SetStudentGrade("O (Outstanding / Top Tier)");

// Display updated state ensuring UI maps instantly without breaking structural flow
Console.WriteLine("[System Status]: Re-rendering viewport layout with modified dataset...");
controller.UpdateView();

Console.WriteLine("Press Enter to exit...");
Console.ReadLine();