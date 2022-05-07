import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private router: Router){}
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(state.url === "/home"){
        return this.authService.isAuthenticated().pipe(map(response => response.status === 'success'),catchError(err=>of(false)))
      }
      if(state.url === "/"){
        return this.authService.isAuthenticated().pipe(map(response => response.status !== 'success'),catchError(err=>of(true)))
      }
      return false;
    
  }
  
}
