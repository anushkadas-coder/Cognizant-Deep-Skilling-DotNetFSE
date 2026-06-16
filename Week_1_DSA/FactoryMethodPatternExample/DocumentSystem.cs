using System;

namespace FactoryMethodPatternExample
{
    // 1. The Product Interface
    public interface IDocument
    {
        void Open();
    }

    // 2. Concrete Product 1: Word Document
    public class WordDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening Word Document: Loading docx formatting elements...");
    }

    // 3. Concrete Product 2: PDF Document
    public class PdfDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening PDF Document: Rendering vector layouts and fonts...");
    }

    // 4. Concrete Product 3: Excel Document
    public class ExcelDocument : IDocument
    {
        public void Open() => Console.WriteLine("Opening Excel Document: Parsing cells, rows, and data grids...");
    }
}