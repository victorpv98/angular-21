import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedGuard } from './protected.guard';
import { VistaComponent } from './components/vista/vista.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate:[ProtectedGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
