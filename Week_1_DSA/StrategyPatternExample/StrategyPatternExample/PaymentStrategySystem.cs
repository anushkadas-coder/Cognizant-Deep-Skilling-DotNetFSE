using System;

namespace StrategyPatternExample
{
    // 1. Strategy Interface
    public interface IPaymentStrategy
    {
        void Pay(double amount);
    }

    // 2. Concrete Strategy A: Credit Card Processor
    public class CreditCardPayment : IPaymentStrategy
    {
        private readonly string _cardHolderName;
        private readonly string _cardNumber;

        public CreditCardPayment(string name, string cardNumber)
        {
            _cardHolderName = name;
            _cardNumber = cardNumber;
        }

        public void Pay(double amount)
        {
            // Masking card digits for security compliance
            string maskedCard = $"XXXX-XXXX-XXXX-{_cardNumber.Substring(_cardNumber.Length - 4)}";
            Console.WriteLine($"[Credit Card Engine]: Routing {amount} INR transaction via merchant terminal.");
            Console.WriteLine($"                      Holder: {_cardHolderName} | Account: {maskedCard}");
        }
    }

    // 3. Concrete Strategy B: PayPal Core Gateway
    public class PayPalPayment : IPaymentStrategy
    {
        private readonly string _emailId;

        public PayPalPayment(string emailId)
        {
            _emailId = emailId;
        }

        public void Pay(double amount)
        {
            Console.WriteLine($"[PayPal Gateway]: Handshaking api terminal token for {amount} INR execution.");
            Console.WriteLine($"                  Authenticated Profile ID: {_emailId}");
        }
    }

    // 4. Context Class: The terminal interface the client uses
    public class PaymentContext
    {
        private IPaymentStrategy _paymentStrategy;

        // Allows changing the strategy dynamically at runtime
        public void SetPaymentStrategy(IPaymentStrategy strategy)
        {
            _paymentStrategy = strategy;
        }

        public void ExecutePayment(double amount)
        {
            if (_paymentStrategy == null)
            {
                Console.WriteLine("[Error]: Runtime execution fault. No payment algorithm assigned.");
                return;
            }
            _paymentStrategy.Pay(amount);
        }
    }
}