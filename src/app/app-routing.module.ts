import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './services';

const routes: Routes = [
  { path  : '' , redirectTo : 'home' , pathMatch : 'full' },
  { path  : 'home'  , canActivate : [AuthGuard],  component : HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
