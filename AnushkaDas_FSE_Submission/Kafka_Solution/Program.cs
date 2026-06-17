using Confluent.Kafka;

var config = new ProducerConfig { BootstrapServers = "localhost:9092" };

using (var p = new ProducerBuilder<Null, string>(config).Build())
{
    Console.WriteLine("Kafka Chat Started. Type your message and press Enter:");
    while (true)
    {
        var text = Console.ReadLine();
        if (text == "exit") break;

        await p.ProduceAsync("chat-topic", new Message<Null, string> { Value = text });
        Console.WriteLine($"Sent: {text}");
    }
}