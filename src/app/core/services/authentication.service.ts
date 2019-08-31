import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    token = {
        refresh_token: 'refreshtokencode',
        exp: new Date((new Date().getDate() + 1)),
        access_token: {
            username: 'user',
            roles: ['Admin', 'RegisteredUser', 'Super User']
        }
    };

    tokenKey = 'a6smm_utoken';

    constructor(private router: Router) { }

    login(username, password) {
        console.log('username', username);
        console.log('password', password);
        this.setToken(this.token);
        return this.router.navigate(['admin', 'dashboard']);
    }

    logout() {
        this.removeToken();
        return this.router.navigate(['login']);
    }


    // TODO: change local storage to cookies
    getToken() {
        return JSON.parse(localStorage.getItem(this.tokenKey));
    }

    setToken(token) {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
    }

    getAccessToken() {
        return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem(this.tokenKey);
        return !!token;
    }

    refreshToken() {
        this.token.exp = new Date((new Date().getDate() + 1));
        this.setToken(this.token);
    }

    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

}
