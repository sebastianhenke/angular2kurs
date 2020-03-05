import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
    template: `
        <h3>hier registieren:</h3>
        <form [formGroup]="myForm" (ngSubmit)="onSignup()">
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password" class="form-control">
            </div>
            <button type="submit" [disabled]="!myForm.valid" class="btn btn-primary">Sign Up</button>
        </form>
    `
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private fb: FormBuilder, private authService:AuthService) {
    }

    onSignup() {
      this.authService.signupUser(this.myForm.value);
    }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}
