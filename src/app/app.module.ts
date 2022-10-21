import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddPostComponent } from './add-post/add-post.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PostService } from './post-service';


@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    EditPostComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
