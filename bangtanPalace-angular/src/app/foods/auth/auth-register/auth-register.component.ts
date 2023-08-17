import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {
  form!: FormGroup;

  constructor( private formBuilder: FormBuilder) {}
   ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: "",
      password: "",
      isAdmin: "",
    })

   }
}
