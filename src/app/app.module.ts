import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './router/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule, } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'; 
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
import { FollowsDialogComponent } from './pages/profile/follows-dialog/follows-dialog.component';
import { FollowCardComponent } from './components/follow-card/follow-card.component';
import { PostComponent } from './components/post/post.component';

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
    FollowsDialogComponent,
    FollowCardComponent,
    PostComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
