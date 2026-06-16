using System;

namespace AdapterPatternExample
{
    // 1. The Target Interface (What our client application expects)
    public interface IPaymentProcessor
    {
        void ProcessPayment(double amount);
    }

    // 2. Adaptee A: Legacy/Third-Party PayPal Gateway (Incompatible Interface)
    public class PayPalGateway
    {
        public void MakePayment(double amountInUSD)
        {
            Console.WriteLine($"[PayPal Engine]: Processing safe transactional payment of ${amountInUSD} USD.");
        }
    }

    // 3. Adaptee B: Modern Stripe API Gateway (Another Incompatible Interface)
    public class StripeGateway
    {
        public void CaptureCharge(string currency, double totalAmount)
        {
            Console.WriteLine($"[Stripe Cloud]: Securely capturing charge of {totalAmount} {currency} via tokenized API.");
        }
    }

    // 4. Adapter 1: Translates IPaymentProcessor calls to PayPalGateway
    public class PayPalAdapter : IPaymentProcessor
    {
        private readonly PayPalGateway _payPalGateway;

        public PayPalAdapter(PayPalGateway payPalGateway)
        {
            _payPalGateway = payPalGateway;
        }

        public void ProcessPayment(double amount)
        {
            // Direct call translation
            _payPalGateway.MakePayment(amount);
        }
    }

    // 5. Adapter 2: Translates IPaymentProcessor calls to StripeGateway
    public class StripeAdapter : IPaymentProcessor
    {
        private readonly StripeGateway _stripeGateway;

        public StripeAdapter(StripeGateway stripeGateway)
        {
            _stripeGateway = stripeGateway;
        }

        public void ProcessPayment(double amount)
        {
            // Translating to match Stripe's multi-parameter method
            _stripeGateway.CaptureCharge("INR", amount);
        }
    }
}