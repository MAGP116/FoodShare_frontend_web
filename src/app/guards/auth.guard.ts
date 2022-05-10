import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private router: Router){}
  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(state.url === "/"){//login page
        return this.authService.isAuthenticated().pipe(map(response =>{
          if(response.status === 200){
            this.router.navigate(['/home']);
          }
          return response.status !== 200
        }),catchError(err=>{
          this.router.navigate(['/home']);
          return of(false)
        }))
      }
      return this.authService.isAuthenticated().pipe(map(response =>{
        if(response.status !== 200){
          this.router.navigate(['/']);
        }
        return response.status === 200
      }),catchError(err=>{
        this.router.navigate(['/']);
        return of(false)
      }))
    
  }
  
}
