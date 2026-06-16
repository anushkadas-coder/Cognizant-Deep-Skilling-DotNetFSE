using System;

namespace DecoratorPatternExample
{
    // 1. Component Interface
    public interface INotifier
    {
        void Send(string message);
    }

    // 2. Concrete Component: The core mandatory notification channel
    public class EmailNotifier : INotifier
    {
        public void Send(string message)
        {
            Console.WriteLine($"[Email Core]: Dispatching SMTP message secure block: '{message}'");
        }
    }

    // 3. Abstract Decorator Class (Implements interface and wraps an instance)
    public abstract class NotifierDecorator : INotifier
    {
        protected readonly INotifier _wrappedNotifier;

        protected NotifierDecorator(INotifier notifier)
        {
            _wrappedNotifier = notifier;
        }

        public virtual void Send(string message)
        {
            // Standard forwarding to the inner component
            _wrappedNotifier.Send(message);
        }
    }

    // 4. Concrete Decorator A: Adds SMS structural pipeline
    public class SMSNotifierDecorator : NotifierDecorator
    {
        public SMSNotifierDecorator(INotifier notifier) : base(notifier) { }

        public override void Send(string message)
        {
            base.Send(message); // Core executes first
            SendSMS(message);   // Added decoration functionality
        }

        private void SendSMS(string message)
        {
            Console.WriteLine($"   --> [SMS Decorator]: Triggering cellular SMS packet broadcast: '{message}'");
        }
    }

    // 5. Concrete Decorator B: Adds Slack webhook routing
    public class SlackNotifierDecorator : NotifierDecorator
    {
        public SlackNotifierDecorator(INotifier notifier) : base(notifier) { }

        public override void Send(string message)
        {
            base.Send(message);
            SendSlackMessage(message);
        }

        private void SendSlackMessage(string message)
        {
            Console.WriteLine($"   --> [Slack Decorator]: Executing webhook push notification to workspace channel: '{message}'");
        }
    }
}