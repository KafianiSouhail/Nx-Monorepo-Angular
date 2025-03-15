import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MyRoles } from '../../types/interfaces/my-roles.enum';
import { AdminRoutes, UserRoutes } from '@posts/config'
@Component({
  selector: 'lib-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public form:FormGroup;
  public errorMsg:string;

  private readonly router = inject(Router)
  private readonly authService = inject(AuthService)
  private readonly formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.form = this.initializeForm();
  }

  initializeForm():FormGroup{
    return this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  onSubmit():void{
    if(this.form.invalid) return;
    const {email,password} = this.form.getRawValue();
    this.authService.login(email, password).subscribe(response => {
      if(response.error){
        this.errorMsg = response.error.message;
      }
      else{
        const routeUrl = this.authService.currentUser()?.role === MyRoles.ADMIN ? AdminRoutes.USERS : UserRoutes.POSTS;
        this.router.navigateByUrl(`/${routeUrl}`);
      }
    }) 
  }
}
