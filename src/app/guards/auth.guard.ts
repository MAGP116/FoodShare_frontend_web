import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var res: boolean = false;
    this.authService.isAuthenticated().subscribe({next:(val)=>{
      console.log(val);
      res = true;
    },error:(err)=>{
      console.log(err);
      this.router.navigateByUrl('/');
    }})
    return res;
  }
  
}
