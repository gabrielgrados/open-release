import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "", redirectTo: "login", pathMatch: "full"
    },
    {
        path:"login",
        loadComponent: () => import("./features/auth/login/login.component").then( m => m.LoginComponent)
    },{
        path: "",
        loadComponent: () => import("./layout/main/main.component").then(m => m.MainComponent),
        children: [
            {
                path: "dashboard",
                loadComponent: () => import("./features/dashboard/dashboard.component").then(m => m.DashboardComponent)
            }
        ]
    },
    {
        path:"**",
        redirectTo: "login"
    }


];
