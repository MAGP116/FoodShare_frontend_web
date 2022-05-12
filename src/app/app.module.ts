import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './router/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatListModule} from '@angular/material/list'; 
import { LoginFormComponent } from './pages/login/login-form/login-form.component'; 
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FileButtonComponent } from './components/file-button/file-button.component';
import { TestComponent } from './pages/test/test.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { FollowsDialogComponent } from './components/follows-dialog/follows-dialog.component';
import { FollowCardComponent } from './components/follow-card/follow-card.component';
import { PostComponent } from './components/post/post.component';
import { SearchComponent } from './components/search/search.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MiniPostImageComponent } from './components/mini-post-image/mini-post-image.component';
import { MiniPostDialogComponent } from './components/mini-post-dialog/mini-post-dialog.component';
import { CommentComponent } from './pages/comment/comment.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { SearchUserComponent } from './pages/search-user/search-user.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpFormComponent } from './pages/sign-up/sign-up-form/sign-up-form.component';
import { CompleteUserComponent } from './pages/complete-user/complete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    NotFoundComponent,
    FileButtonComponent,
    TestComponent,
    ProfileComponent,
    NewPostComponent,
    FollowsDialogComponent,
    FollowCardComponent,
    PostComponent,
    SearchComponent,
    MiniPostImageComponent,
    MiniPostDialogComponent,
    CommentComponent,
    CommentCardComponent,
    CommentFormComponent,
    SearchUserComponent,
    EditProfileComponent,
    UserInputsComponent,
    SignUpComponent,
    SignUpFormComponent,
    CompleteUserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
