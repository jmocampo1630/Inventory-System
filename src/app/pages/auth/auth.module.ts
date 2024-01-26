import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NebularImportModule } from '../../shared/modules/nebular-import.module';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NbLayoutModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent,
  ],
  imports: [
    NbLayoutModule,
    NbAuthModule,
    CommonModule,
    RouterModule,
    NebularImportModule,
    NebularImportModule,
  ]
})
export class AuthModule { }
