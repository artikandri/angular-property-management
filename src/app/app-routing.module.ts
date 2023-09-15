import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/pages/profile/profile.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { NotFoundComponent } from './modules/common/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  },
  {
    path: 'profile',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ProfileComponent }
    ]
  },
  
    { path: '**', pathMatch: 'full', 
        component: MainLayoutComponent,
        children: [
            { path: '', component: NotFoundComponent }
        ] 
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
