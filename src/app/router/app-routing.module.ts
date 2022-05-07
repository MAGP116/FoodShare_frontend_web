import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    {path:'', component:LoginComponent},
    {path: "home", component:HomeComponent, canActivate:[AuthGuard],},
    {path: '**', component:NotFoundComponent, canActivate:[AuthGuard],}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}