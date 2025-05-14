import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard, adminGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: '/login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [authGuard]
    },
    // Admin routes will be implemented later
    // {
    //     path: 'admin',
    //     loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
    //     canActivate: [adminGuard]
    // },
    // Wildcard route for 404
    { 
        path: '**', 
        redirectTo: '/dashboard'
    }
];
