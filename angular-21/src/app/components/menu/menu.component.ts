import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  usuariologueado = false;
  constructor(public autenticacion: AuthenticationService){}

  ngOnInit(): void {
    // Acá le podemos a donde nos llevará despues de registrarnos
    this.usuariologueado = this.autenticacion.isLoggedIn('vista');
    this.autenticacion.cambioLogeadoStatus$.subscribe(
      (loggedSatus: boolean) => this.usuariologueado = loggedSatus
    );
  }

  logout(){
    this.autenticacion.logout();
  }
}
