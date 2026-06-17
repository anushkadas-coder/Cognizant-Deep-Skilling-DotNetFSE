import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/courses';
  private isLoggedInStatus = true; 

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
}