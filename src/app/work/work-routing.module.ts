import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from '../../home/home.component';
// import { WorkComponent } from '../../work/work.component';
import { GoodWorkComponent } from './good-work/good-work.component';
import { BadWorkComponent } from './bad-work/bad-work.component';
const routes: Routes = [];

const workRoutes: Routes = [
  { path: 'goodwork', component:GoodWorkComponent },
  { path: 'badwork', component:BadWorkComponent},
  // Bring them to the child router
  // { path: 'work/badwork', component: BadWorkComponent },
  // { path: 'work/goodwork', component:  GoodWorkComponent}
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forChild(workRoutes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
