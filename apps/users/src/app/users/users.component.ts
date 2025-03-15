import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from './types/user.interface';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent  implements OnInit{
  public users = signal<IUser[]>([])

  private readonly usersService = inject(UsersService)

  ngOnInit(): void {
    this.usersService.loadUsers().subscribe(response => {
      this.users.set(response);
    })    
  }
}
