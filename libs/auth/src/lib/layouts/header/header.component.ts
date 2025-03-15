import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MyRoutes } from '../../types/interfaces/my-routes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:false
})
export class HeaderComponent implements OnInit {
  public myRoutes:typeof MyRoutes = MyRoutes;
  public currentUser = signal<{email:string} | null>(null)

  private readonly authservice = inject(AuthService)
  private readonly router = inject(Router)
  ngOnInit() {
    this.currentUser = this.authservice.currentUser;
  }

  onLogout():void{
    this.authservice.logout();
    this.router.navigate(['auth',MyRoutes.LOGIN])
  }

}
