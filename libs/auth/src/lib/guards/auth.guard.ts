import { inject, Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { MyRoutes } from "../types/interfaces/my-routes.enum";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    private readonly authService = inject(AuthService)
    private readonly router = inject(Router);

    canActivate(): boolean | UrlTree {
       return this.authService.currentUser() ? true : this.router.parseUrl(`/auth/${MyRoutes.LOGIN}`)
    }
}