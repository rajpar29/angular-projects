import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { AuthGuard } from './core/auth.guard';
import { DeAuthGuard } from './core/de-auth.guard';
import { BrowseComponent } from './browse/browse.component';
import { BrowseDetailComponent } from './browse/browse-detail/browse-detail.component';
import { BrowseStudyComponent } from './browse-study/browse-study.component';
import { BrowseStudyDetailComponent } from './browse-study/browse-study-detail/browse-study-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'createAssignment', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'createAssignment', component: CreateAssignmentComponent, canActivate: [AuthGuard]},
  { path: 'browse', component: BrowseComponent, canActivate: [AuthGuard] },
  { path: 'browseStudyMaterial', component: BrowseStudyComponent, canActivate: [AuthGuard] },
  { path: 'bid', component: BrowseStudyDetailComponent, canActivate: [AuthGuard]},
  { path: 'id', component: BrowseDetailComponent, canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
