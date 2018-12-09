import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { GoodWorkComponent } from './work/good-work/good-work.component';
import { BadWorkComponent } from './work/bad-work/bad-work.component';
const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent,}

          { path: 'work/badwork', component: BadWorkComponent }
          ,
          { path: 'work/goodwork', component:  GoodWorkComponent}

  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
