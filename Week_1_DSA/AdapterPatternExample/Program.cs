using System;
using AdapterPatternExample;

Console.WriteLine("=== Starting Adapter Pattern Verification ===");
Console.WriteLine();

// Client code only works with the uniform IPaymentProcessor interface!
IPaymentProcessor processor;

Console.WriteLine("[Client Application]: Routing billing cycle transaction to PayPal...");
PayPalGateway legacyPayPal = new PayPalGateway();
processor = new PayPalAdapter(legacyPayPal);
processor.ProcessPayment(4500.50);

Console.WriteLine("------------------------------------------------------------");

Console.WriteLine("[Client Application]: Routing fallback transaction to Stripe...");
StripeGateway advancedStripe = new StripeGateway();
processor = new StripeAdapter(advancedStripe);
processor.ProcessPayment(8900.00);

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();