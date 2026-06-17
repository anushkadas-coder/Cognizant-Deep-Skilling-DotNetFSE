import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentFormComponent } from '../../components/enrollment-form/enrollment-form';
import { CourseListComponent } from '../course-list/course-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EnrollmentFormComponent, CourseListComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}