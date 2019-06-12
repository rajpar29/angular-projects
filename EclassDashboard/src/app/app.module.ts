import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';

import { AngularFireModule } from '@angular/fire';
import { CoreModule } from './core/core.module';
import { ErrorComponent } from './error/error.component';
import { UploadFilesComponent } from './create-assignment/upload-files/upload-files.component';
import { FileSizePipe } from './pipes/file-size.pipe';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowseComponent } from './browse/browse.component';
import { BrowseItemComponent } from './browse/browse-item/browse-item.component';
import { BrowseDetailComponent } from './browse/browse-detail/browse-detail.component';
import { BrowseStudyComponent } from './browse-study/browse-study.component';
import { BrowseStudyDetailComponent } from './browse-study/browse-study-detail/browse-study-detail.component';
import { BrowseStudyItemComponent } from './browse-study/browse-study-item/browse-study-item.component';

const config = {
  apiKey: 'AIzaSyBx3GIo9ePFDOfRoJy2jXAcCZp3JZ_BPZQ',
  authDomain: 'eclass-6f567.firebaseapp.com',
  databaseURL: 'https://eclass-6f567.firebaseio.com',
  projectId: 'eclass-6f567',
  storageBucket: 'eclass-6f567.appspot.com',
  messagingSenderId: '148913970275'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CreateAssignmentComponent,
    ErrorComponent,
    UploadFilesComponent,
    FileSizePipe,
    BrowseComponent,
    BrowseItemComponent,
    BrowseDetailComponent,
    BrowseStudyComponent,
    BrowseStudyDetailComponent,
    BrowseStudyItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
