using System;

namespace CommandPatternExample
{
    // 1. The Command Interface
    public interface ICommand
    {
        void Execute();
    }

    // 2. The Receiver Class: Contains the actual operational business logic
    public class Light
    {
        private readonly string _roomLocation;

        public Light(string location)
        {
            _roomLocation = location;
        }

        public void TurnOn()
        {
            Console.WriteLine($"[Hardware Actuator]: {_roomLocation} Light source has been switched ON [100% Lumens].");
        }

        public void TurnOff()
        {
            Console.WriteLine($"[Hardware Actuator]: {_roomLocation} Light source has been switched OFF [0 Lumens].");
        }
    }

    // 3. Concrete Command 1: Encapulates turning the light ON
    public class LightOnCommand : ICommand
    {
        private readonly Light _light;

        public LightOnCommand(Light light)
        {
            _light = light;
        }

        public void Execute()
        {
            _light.TurnOn(); // Delegating to receiver
        }
    }

    // 4. Concrete Command 2: Encapsulates turning the light OFF
    public class LightOffCommand : ICommand
    {
        private readonly Light _light;

        public LightOffCommand(Light light)
        {
            _light = light;
        }

        public void Execute()
        {
            _light.TurnOff(); // Delegating to receiver
        }
    }

    // 5. The Invoker Class: Holds and triggers execution hooks
    public class RemoteControl
    {
        private ICommand _slot;

        // Binds a specific command to the remote slot dynamically
        public void SetCommand(ICommand command)
        {
            _slot = command;
        }

        // Simulates clicking the button on physical controller
        public void PressButton()
        {
            if (_slot == null)
            {
                Console.WriteLine("[System Warning]: No execution command bound to this slot.");
                return;
            }
            _slot.Execute();
        }
    }
}