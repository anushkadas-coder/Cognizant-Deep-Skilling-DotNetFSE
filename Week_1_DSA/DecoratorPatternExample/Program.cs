using System;
using DecoratorPatternExample;

Console.WriteLine("=== Starting Decorator Pattern Verification ===");
Console.WriteLine();

// Step A: Standard Baseline Configuration (Only Email notification required)
Console.WriteLine("[Scenario 1]: User prefers only default notification engine.");
INotifier simpleNotifier = new EmailNotifier();
simpleNotifier.Send("Critical system update patch applied.");

Console.WriteLine("----------------------------------------------------------------------");

// Step B: Wrapping dynamically with an SMS layer at runtime
Console.WriteLine("[Scenario 2]: Critical security alert - Adding SMS fail-safe dynamic override.");
INotifier enhancedSMSNotifier = new SMSNotifierDecorator(simpleNotifier);
enhancedSMSNotifier.Send("Unusual login activity identified from an unmapped IP.");

Console.WriteLine("----------------------------------------------------------------------");

// Step C: Wrapping the already wrapped component with a Slack layer (Multi-Channel pipeline)
Console.WriteLine("[Scenario 3]: Production Outage - Orchestrating Omni-channel notification layout.");
INotifier omniChannelNotifier = new SlackNotifierDecorator(enhancedSMSNotifier);
omniChannelNotifier.Send("Database cluster latency exceeds SLA thresholds. Action needed.");

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();