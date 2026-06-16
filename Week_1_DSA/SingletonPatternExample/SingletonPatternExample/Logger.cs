using System;

namespace SingletonPatternExample
{
    public sealed class Logger
    {
        private static Logger? _instance = null;
        private static readonly object _lock = new object();

        // Private constructor ensures no one can use 'new Logger()' from outside
        private Logger()
        {
            Console.WriteLine(">>> Logger initialized for the very first time. <<<");
        }

        // Public property acting as the single global entry point
        public static Logger Instance
        {
            get
            {
                if (_instance == null)
                {
                    lock (_lock)
                    {
                        if (_instance == null)
                        {
                            _instance = new Logger();
                        }
                    }
                }
                return _instance;
            }
        }

        public void Log(string message)
        {
            Console.WriteLine($"[LOG]: {message}");
        }
    }
}