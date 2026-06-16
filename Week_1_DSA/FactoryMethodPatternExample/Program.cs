using System;
using FactoryMethodPatternExample;

Console.WriteLine("=== Starting Factory Method Pattern Verification ===");
Console.WriteLine();

// Let's create an array of factories to simulate creating different types dynamically
DocumentFactory[] factories = new DocumentFactory[]
{
    new WordDocumentFactory(),
    new PdfDocumentFactory(),
    new ExcelDocumentFactory()
};

// The client application runs seamlessly without knowing the concrete class names!
foreach (var factory in factories)
{
    IDocument doc = factory.CreateDocument();
    doc.Open();
}

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();