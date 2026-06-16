using System;
using System.Threading;

namespace ProxyPatternExample
{
    // 1. The Subject Interface
    public interface IImage
    {
        void Display();
    }

    // 2. The Real Subject: Heavy class that loads data from a remote server
    public class RealImage : IImage
    {
        private readonly string _fileName;

        public RealImage(string fileName)
        {
            _fileName = fileName;
            LoadFromRemoteServer();
        }

        private void LoadFromRemoteServer()
        {
            Console.Write($"[Network Engine]: Downloading heavy asset '{_fileName}' from cloud server...");
            // Simulating high latency network connection
            for (int i = 0; i < 3; i++)
            {
                Console.Write(".");
                Thread.Sleep(400);
            }
            Console.WriteLine(" Done!");
        }

        public void Display()
        {
            Console.WriteLine($"[Render Engine]: Displaying high-resolution graphics for '{_fileName}'");
        }
    }

    // 3. The Proxy Class: Handles lazy loading and caching reference
    public class ProxyImage : IImage
    {
        private RealImage _realImage = null;
        private readonly string _fileName;

        public ProxyImage(string fileName)
        {
            _fileName = fileName;
            // Notice: Object creation inside RealImage is deferred!
        }

        public void Display()
        {
            // Lazy Initialization & Caching logic
            if (_realImage == null)
            {
                Console.WriteLine($"[Proxy Layer]: Cache miss for '{_fileName}'. Initializing secure fetch request...");
                _realImage = new RealImage(_fileName);
            }
            else
            {
                Console.WriteLine($"[Proxy Layer]: Cache hit! Serving '{_fileName}' directly from system memory buffers.");
            }

            _realImage.Display();
        }
    }
}