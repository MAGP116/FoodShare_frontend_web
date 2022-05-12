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
      //login page
      if(state.url === "/"){
        return this.authService.isAuthenticated().pipe(map(response =>{
          
          if(response.status === 200){
            this.router.navigate(['/home']);
          }
          if(response.message === 'User not completed'){
            this.router.navigate(['/register']);
          }
          return response.message === 'Not logged in'
        }),catchError(err=>{
          this.router.navigate(['/enerror1']);
          return of(false)
        }))
      }
      
      //Register page
      if(state.url === '/register'){
        return  this.authService.isAuthenticated().pipe(map(response =>{
          
          if(response.message === 'Not logged in'){
            this.router.navigate(['/']);
          }
          if(response.status === 200){
            this.router.navigate(['/home']);
          }
          return response.message === 'User not completed';
        }),catchError(err=>{
          this.router.navigate(['/enerror2']);
          return of(false)
        }))
      }
      
      //Inside web site
      return this.authService.isAuthenticated().pipe(map(response =>{

        if(response.status === 401){
          if(response.message === 'User not completed'){
            this.router.navigate(['/register']);
          }
          if(response.message === 'Not logged in'){
            this.router.navigate(['/']);
          }
        }
        return response.status === 200
      }),catchError(err=>{
        this.router.navigate(['/enerror3']);
        return of(false)
      }))
    
  }
  
}
