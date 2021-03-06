import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { AuthGuard } from '../guards/auth.guard';
import { TestComponent } from '../pages/test/test.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { NewPostComponent } from '../pages/new-post/new-post.component';
import { CommentComponent } from '../pages/comment/comment.component';
import {SearchUserComponent} from '../pages/search-user/search-user.component'
import { EditProfileComponent } from '../pages/edit-profile/edit-profile.component';
import { LiveComponent } from '../pages/live/live.component';

import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { CompleteUserComponent } from '../pages/complete-user/complete-user.component';
import { LoggedComponent } from '../pages/logged/logged.component';
const routes: Routes = [
    {path: "", component:LoginComponent, canActivate:[AuthGuard],},
    {path: "home", component:HomeComponent, canActivate:[AuthGuard],},
    {path: "test", component:TestComponent,canActivate:[AuthGuard],},
    {path: "profile/:id",component:ProfileComponent,canActivate:[AuthGuard],},
    {path: "new-post",component:NewPostComponent,canActivate:[AuthGuard],},
    {path: "search",component:SearchUserComponent,canActivate:[AuthGuard]},
    {path: "post/:id",component:CommentComponent,canActivate:[AuthGuard],},
    {path: "edit/profile",component:EditProfileComponent,canActivate:[AuthGuard]},
    {path: "live/:id",component:LiveComponent,canActivate:[AuthGuard]},
    {path: "signup",component:SignUpComponent},
    {path: "register",component: CompleteUserComponent,canActivate:[AuthGuard]},
    {path: "logged/:token", component: LoggedComponent},
    {path: '**', component:NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}