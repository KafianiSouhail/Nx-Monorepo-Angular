import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routes';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  declarations: [
    AuthComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HeaderComponent
  ],
})
export class AuthModule {}
