import { Route } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UserRoutes } from '@posts/config';

export const appRoutes: Route[] = [
    {
        path:'auth',
        loadChildren: () => import("@posts/auth").then(m => m.AuthModule)
    },
    {
        path:UserRoutes.POSTS,
        loadComponent: () => import("./posts/posts.component").then(cmp => cmp.PostsComponent)
    }

];
