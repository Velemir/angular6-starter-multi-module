import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authentication: AuthenticationService) { }

    ngOnInit() {
    }

    login(username, password) {
        this.authentication.login(username, password);
    }

}
