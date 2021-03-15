import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    islogin = false;

    login() {
        this.islogin = true;
    }

    logout() {
        this.islogin = false;
        // navigate meth

    }

}