import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnexeRptc480Component} from './annexe-rptc480/annexe-rptc480.component'
import {CreerAnnexeComponent} from './creer-annexe/creer-annexe.component'
import { UpdateAnnexeComponent } from './update-annexe/update-annexe.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'annexe-rptc480', component: AnnexeRptc480Component },
  { path: 'creer-annexe', component: CreerAnnexeComponent },
  { path: 'update-annexe', component: UpdateAnnexeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
