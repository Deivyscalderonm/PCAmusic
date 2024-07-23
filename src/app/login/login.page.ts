import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
//funcion para mensajes 
validation_messages={
  email:[
    {type:'required', message:'El email es obligatorio.' },
    {type:'pattern', message:'Correo invalido'}
  ],
  password: [
    { type: 'required', message: 'La Contraseña es obligatorio.' },
    { type: 'minlength', message: 'La Contraseña debe tener minimo 6 caracteres.' }
  ]
};

// construcor
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
         Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"),
        Validators.required
      ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
        Validators.required,
                 
        ])
      )
    })
  }

  ngOnInit() { }

  onSubmit(dataLogin:any) {
    console.log(dataLogin);
    // this.router.navigateByUrl('/home');
  }

  registre() {
    // console.log("ingrese a la funcion");
    this.router.navigateByUrl('/registro');
  }
}
