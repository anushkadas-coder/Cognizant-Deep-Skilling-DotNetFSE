using System;
using CommandPatternExample;

Console.WriteLine("=== Starting Command Pattern Verification ===");
Console.WriteLine();

// Step A: Initialize the infrastructure receiver device
Light livingRoomLight = new Light("Living Room");

// Step B: Instantiate our command wrappers and bind them to the target receiver
ICommand switchOn = new LightOnCommand(livingRoomLight);
ICommand switchOff = new LightOffCommand(livingRoomLight);

// Step C: Initialize the Invoker device (The controller interface)
RemoteControl universalRemote = new RemoteControl();

// SCENARIO 1: Binding and executing the ON instruction flow
Console.WriteLine("[User Action]: Pressing button configured for 'Daylight Mode'...");
universalRemote.SetCommand(switchOn);
universalRemote.PressButton();

Console.WriteLine("----------------------------------------------------------------------");

// SCENARIO 2: Binding and executing the OFF instruction flow
Console.WriteLine("[User Action]: Pressing button configured for 'Night Mode'...");
universalRemote.SetCommand(switchOff);
universalRemote.PressButton();

Console.WriteLine();
Console.WriteLine("Press Enter to exit...");
Console.ReadLine();