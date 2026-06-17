import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HomeComponent } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { CourseService } from './services/course';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Portal - Dashboard' },
  { path: 'courses', component: CourseListComponent, title: 'Portal - Catalog' },
  { 
    path: 'profile', 
    component: StudentProfileComponent, 
    title: 'Portal - Profile',
    canActivate: [
      () => {
        const courseService = inject(CourseService);
        const router = inject(Router);
        if (courseService.isLoggedIn()) {
          return true;
        } else {
          alert('Security Access Denied: Please authenticate via Corporate Portal.');
          router.navigate(['/']);
          return false;
        }
      }
    ]
  },
  { path: '**', redirectTo: '' }
];