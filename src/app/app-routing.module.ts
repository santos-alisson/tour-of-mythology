import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MythsComponent } from './myths/myths.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MythDetailComponent } from './myth-detail/myth-detail.component';

const routes: Routes = [
  { path: 'myths', component: MythsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MythDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
