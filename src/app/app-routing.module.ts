import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard-service';
import { RegisterComponent } from './register/register.component';
import { CarriersComponent } from './carriers/carriers.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PDFImageEditComponent } from './pdfimage-edit/pdfimage-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'carriers',
    component: CarriersComponent,
    canActivate: [AuthGuardService]

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'pdfImage',
    component: PDFImageEditComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
