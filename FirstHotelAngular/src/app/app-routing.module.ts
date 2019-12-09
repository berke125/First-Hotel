import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sign_InComponent } from './Sign_In/Sign_In.component';
import { Sign_UpComponent } from './Sign_Up/Sign_Up.component';
import { Hone_PageComponent } from './Home_Page/Home_Page.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home_Page', pathMatch: 'full' },
  { path: "Sign_In", component: Sign_InComponent },
  { path: "Sign_Up", component: Sign_UpComponent },
  { path: "Home", component: Hone_PageComponent },
  { path: '**', component: Hone_PageComponent },
  { path: 'Welcome', component: WelcomeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { } 


