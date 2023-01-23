import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
})
export class OrganizationURLGuards implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
                
    }
}