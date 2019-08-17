import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  passwordType: string = 'password';
  passwordShown: boolean = false;
  isLoggedIn = true;
  isLoading = false;

  signupForm: FormGroup;

  constructor(private signupService: SignupService, private router: Router) { }
  ngOnInit() {
    this.signupForm = new FormGroup({
      //'username':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(20),Validators.minLength(6)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('^[a-z]+[0-9]+$'), Validators.minLength(6)]),
      'password1': new FormControl(null, [Validators.required]),
    }, this.passwordMatchValidator)

  }
  onSubmit() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.isLoading = true;
    if (this.isLoggedIn) {

        this.signupService.login(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/film']);
      }
      );
      this.signupForm.reset();
    } else {
        this.signupService.signup(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/film']);
      }
      );
    
    }


  }
  passwordMatchValidator(g: FormGroup) {
    if (g.get('password').value != g.get('password1').value)
      return { 'mismatch': true };
    else {
      return null;
    }
  }

  passwordToggle() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }
  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

}
