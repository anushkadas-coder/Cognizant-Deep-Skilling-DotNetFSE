import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CourseDurationPipe } from '../../pipes/course-duration-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CourseDurationPipe],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: { id: number, name: string, code: string, credits: number };
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCardComponent Input Changed:', changes['course']?.currentValue);
  }

  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }
}