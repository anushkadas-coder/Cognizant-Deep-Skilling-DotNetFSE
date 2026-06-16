using System;

namespace MVCPatternExample
{
    // 1. THE MODEL: Pure Data Container
    public class Student
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Grade { get; set; }
    }

    // 2. THE VIEW: Pure Presentation Layer (Handles how data is seen by users)
    public class StudentView
    {
        public void DisplayStudentDetails(string studentId, string studentName, string studentGrade)
        {
            Console.WriteLine("======================================");
            Console.WriteLine("        STUDENT RECORD PROFILE        ");
            Console.WriteLine("======================================");
            Console.WriteLine($"  Registration ID : {studentId}");
            Console.WriteLine($"  Student Name    : {studentName}");
            Console.WriteLine($"  Academic Grade  : {studentGrade}");
            Console.WriteLine("======================================\n");
        }
    }

    // 3. THE CONTROLLER: The Brain (Intersects logic between Model and View)
    public class StudentController
    {
        private readonly Student _model;
        private readonly StudentView _view;

        public StudentController(Student model, StudentView view)
        {
            _model = model;
            _view = view;
        }

        // Controlling Model Updates
        public void SetStudentName(string name) => _model.Name = name;
        public string GetStudentName() => _model.Name;

        public void SetStudentId(string id) => _model.Id = id;
        public string GetStudentId() => _model.Id;

        public void SetStudentGrade(string grade) => _model.Grade = grade;
        public string GetStudentGrade() => _model.Grade;

        // Command the presentation sync layer
        public void UpdateView()
        {
            _view.DisplayStudentDetails(_model.Id, _model.Name, _model.Grade);
        }
    }
}