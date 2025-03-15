import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthGuard } from "./guards/auth.guard";
import { MyRoutes } from "./types/interfaces/my-routes.enum";

export const authRoutes:Routes = [
    {
        path:'', 
        component:AuthComponent, 
        children:[
            {path:MyRoutes.LOGIN, component:LoginComponent},
            {path:MyRoutes.REGISTER, component:RegisterComponent},
            {path:MyRoutes.PROFILE, component:ProfileComponent, canActivate:[AuthGuard]}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports:[RouterModule]
})
export class AuthRoutingModule{}