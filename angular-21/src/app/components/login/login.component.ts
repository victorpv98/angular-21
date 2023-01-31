import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private  auten: AuthenticationService, private route: Router){}


  redireccion='';

  name: string = '';
  password='';

  userDate = 'AD';
  pass = '123456';

  // Validaciones para los booleanos
  validacion = true;
  mensaje = "Username or Password Incorrect!"

  login(){
    if(this.name==this.userDate && this.password==this.pass){
      console.log("usuario correcto");
      this.auten.login();
      this.redireccion = this.auten.urlUSuarioIntentandoAcceder;
      this.auten.urlUSuarioIntentandoAcceder = '';
      this.route.navigate([this.redireccion]);
    }else{
      console.log("Coloque bien su usuario");
      this.validacion=false;
      return;
    }
  }
}
