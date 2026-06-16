using System;
using System.Collections.Generic;

namespace ObserverPatternExample
{
    // 1. Observer Interface
    public interface IObserver
    {
        void Update(string stockSymbol, double price);
    }

    // 2. Subject (Target) Interface
    public interface IStock
    {
        void RegisterObserver(IObserver observer);
        void DeregisterObserver(IObserver observer);
        void NotifyObservers();
    }

    // 3. Concrete Subject: Maintains state and updates collection data
    public class StockMarket : IStock
    {
        private readonly List<IObserver> _observers = new List<IObserver>();
        private string _stockSymbol;
        private double _price;

        public StockMarket(string stockSymbol, double initialPrice)
        {
            _stockSymbol = stockSymbol;
            _price = initialPrice;
        }

        // Method to simulate price updates at runtime
        public void UpdatePrice(double newPrice)
        {
            Console.WriteLine($"\n[Stock Exchange]: {_stockSymbol} value adjusted to {newPrice} INR.");
            _price = newPrice;
            NotifyObservers(); // Automatic trigger activation
        }

        public void RegisterObserver(IObserver observer)
        {
            _observers.Add(observer);
            Console.WriteLine($"[Market Registry]: Added new endpoint subscription node.");
        }

        public void DeregisterObserver(IObserver observer)
        {
            _observers.Remove(observer);
            Console.WriteLine($"[Market Registry]: Dropped subscription channel pipeline.");
        }

        public void NotifyObservers()
        {
            foreach (var observer in _observers)
            {
                observer.Update(_stockSymbol, _price);
            }
        }
    }

    // 4. Concrete Observer A: Mobile Application layout
    public class MobileApp : IObserver
    {
        private readonly string _appName;

        public MobileApp(string appName)
        {
            _appName = appName;
        }

        public void Update(string stockSymbol, double price)
        {
            Console.WriteLine($"   --> [Mobile Notification - {_appName}]: Push Alert! {stockSymbol} ticker changed to {price} INR.");
        }
    }

    // 5. Concrete Observer B: Web Application dashboard layout
    public class WebApp : IObserver
    {
        private readonly string _dashboardName;

        public WebApp(string dashboardName)
        {
            _dashboardName = dashboardName;
        }

        public void Update(string stockSymbol, double price)
        {
            Console.WriteLine($"   --> [Web System - {_dashboardName}]: Grid refreshed! Broadcasted event parsed: {stockSymbol} is now tracking at {price} INR.");
        }
    }
}