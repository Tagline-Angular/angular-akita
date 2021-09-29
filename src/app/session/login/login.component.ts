import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../state/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService,
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('')
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.sessionService.updateUserName(this.loginForm.value.username);
    this.router.navigate(['/products']);
  }

}
