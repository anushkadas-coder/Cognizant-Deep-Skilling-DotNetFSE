using System;

namespace FactoryMethodPatternExample
{
    // 1. Abstract Creator Class
    public abstract class DocumentFactory
    {
        // The Factory Method
        public abstract IDocument CreateDocument();
    }

    // 2. Concrete Creator 1: Word Factory
    public class WordDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument() => new WordDocument();
    }

    // 3. Concrete Creator 2: PDF Factory
    public class PdfDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument() => new PdfDocument();
    }

    // 4. Concrete Creator 3: Excel Factory
    public class ExcelDocumentFactory : DocumentFactory
    {
        public override IDocument CreateDocument() => new ExcelDocument();
    }
}