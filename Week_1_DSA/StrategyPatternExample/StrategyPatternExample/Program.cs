using System;
using StrategyPatternExample;

Console.WriteLine("=== Starting Strategy Pattern Verification ===");
Console.WriteLine();

// Instantiate the single context context instance
PaymentContext checkoutCart = new PaymentContext();

// SCENARIO 1: User chooses Credit Card checkout option
Console.WriteLine("[Checkout Stage]: User selected Credit Card payment channel...");
IPaymentStrategy cardStrategy = new CreditCardPayment("Anushka Das", "1234567890123456");
checkoutCart.SetPaymentStrategy(cardStrategy);
checkoutCart.ExecutePayment(14500.00);

Console.WriteLine("----------------------------------------------------------------------");

// SCENARIO 2: User changes their mind at checkout and chooses PayPal instead
Console.WriteLine("[Checkout Stage]: User updated processing pipeline to PayPal fallback...");
IPaymentStrategy paypalStrategy = new PayPalPayment("anushka.das@zetheta.com");
checkoutCart.SetPaymentStrategy(paypalStrategy);
checkoutCart.ExecutePayment(7800.50);

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();