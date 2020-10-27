import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RegisterService } from './register/register.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public registerService: RegisterService, public router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot)
        : boolean | Promise<boolean> | Observable<boolean | UrlTree> {
        return this.registerService.registerUser.pipe(
            take(1),
            map(user => {
                const isAuth = !!user
                if (isAuth) {
                    return true
                }
                return this.router.createUrlTree(['/login'])
            }))

    }
}