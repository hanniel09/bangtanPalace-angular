import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {
  form!: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,) {}

   ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: "",
      password: "",
    })

   }

   home(){
    this.location.back();
  }
}
