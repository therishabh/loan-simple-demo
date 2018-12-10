import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {

  	let userData = localStorage.getItem('loginUser');
  	if(userData){
        return true;
  	}else{
      this.router.navigate(['/'], {
        queryParams: {
          return: state.url
        }
      });
  		return false;
  	}
  }
}
