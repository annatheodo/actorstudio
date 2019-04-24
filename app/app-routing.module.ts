// ng
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
