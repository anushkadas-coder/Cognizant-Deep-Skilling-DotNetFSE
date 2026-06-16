using System;

namespace BuilderPatternExample
{
    public class Computer
    {
        // 1. Product Attributes (Read-only properties)
        public string CPU { get; private set; }
        public string RAM { get; private set; }
        public string Storage { get; private set; }
        public string GraphicsCard { get; private set; }
        public string OS { get; private set; }

        // 2. Private constructor: forces creation only via the Builder
        private Computer(Builder builder)
        {
            CPU = builder.CPU;
            RAM = builder.RAM;
            Storage = builder.Storage;
            GraphicsCard = builder.GraphicsCard;
            OS = builder.OS;
        }

        public void DisplayConfiguration()
        {
            Console.WriteLine("--- System Specifications ---");
            Console.WriteLine($"CPU:           {CPU ?? "Not Configured"}");
            Console.WriteLine($"RAM:           {RAM ?? "Not Configured"}");
            Console.WriteLine($"Storage:       {Storage ?? "Not Configured"}");
            Console.WriteLine($"Graphics Card: {GraphicsCard ?? "Integrated Graphics"}");
            Console.WriteLine($"OS:            {OS ?? "No Operating System Installed"}");
            Console.WriteLine("-----------------------------");
            Console.WriteLine();
        }

        // 3. Static Nested Builder Class
        public class Builder
        {
            public string CPU { get; set; }
            public string RAM { get; set; }
            public string Storage { get; set; }
            public string GraphicsCard { get; set; }
            public string OS { get; set; }

            // Builder fluent methods return 'this' to allow method chaining
            public Builder SetCPU(string cpu)
            {
                CPU = cpu;
                return this;
            }

            public Builder SetRAM(string ram)
            {
                RAM = ram;
                return this;
            }

            public Builder SetStorage(string storage)
            {
                Storage = storage;
                return this;
            }

            public Builder SetGraphicsCard(string graphicsCard)
            {
                GraphicsCard = graphicsCard;
                return this;
            }

            public Builder SetOS(string os)
            {
                OS = os;
                return this;
            }

            // The final build method that constructs the target object
            public Computer Build()
            {
                return new Computer(this);
            }
        }
    }
}