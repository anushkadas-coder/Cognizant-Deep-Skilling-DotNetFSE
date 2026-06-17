import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration',
  standalone: true
})
export class CourseDurationPipe implements PipeTransform {
  transform(credits: number): string {
    const hours = credits * 15; // 1 Credit = 15 Hours formula
    return `${hours} Hrs Estimated Study`;
  }
}