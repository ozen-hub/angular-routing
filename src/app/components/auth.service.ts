import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie: CookieService, private router:Router) {
  }

  public setToken(tokenData: string): void {
    this.cookie.set('token', tokenData, 10);
  }

  public isExists(key: string): boolean {
    return this.cookie.check(key);
  }
  public logout(key:string){
    this.cookie.delete(key);
    this.router.navigateByUrl('/login').then()
  }
}
