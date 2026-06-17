import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CourseService } from '../services/course';

export const authGuard: CanActivateFn = (route, state) => {
  const courseService = inject(CourseService);
  const router = inject(Router);

  if (courseService.isLoggedIn()) {
    return true; // Access granted
  } else {
    alert('Security Access Denied: Please authenticate via Corporate Portal.');
    router.navigate(['/']);
    return false; // Route isolated
  }
};