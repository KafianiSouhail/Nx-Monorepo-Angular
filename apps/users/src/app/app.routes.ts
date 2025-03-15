import { Route } from '@angular/router';
import { AdminRoutes } from '@posts/config';
import path from 'path';

export const appRoutes: Route[] = [
    {
        path:'auth',
        loadChildren: () => import('@posts/auth').then(m => m.AuthModule)
    },
    {   path:AdminRoutes.USERS,
        loadComponent: () => import('./users/users.component').then(cmp => cmp.UsersComponent)
    }
];
