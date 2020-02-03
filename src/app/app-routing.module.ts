import { AuthGuard } from './Guards/auth.guard';
import { LoginComponent } from './components/backOffice/login/login.component';
import { RegisterComponent } from './components/backOffice/register/register.component';
import { HomeComponent } from './components/backOffice/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/backOffice/product/product-list/product-list.component';
import { ProductDetailsComponent } from './components/backOffice/product/product-details/product-details.component';


export const routes: Routes = [
  // { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'home', children:[
    { path: "" , component: HomeComponent},
    { path: "category/:id", component: ProductListComponent  },
    {path: "product/:id", component: ProductDetailsComponent}
  ]},
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
 
  { path : '**', redirectTo:'/home', pathMatch : 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
