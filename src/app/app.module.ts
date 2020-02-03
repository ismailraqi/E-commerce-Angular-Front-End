import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/backOffice/login/login.component';
import { RegisterComponent } from './components/backOffice/register/register.component';
import { HomeComponent } from './components/backOffice/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './Guards/auth.guard';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductListComponent } from './components/backOffice/product/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/shared/categories/categories.component';
import { ProductDetailsComponent } from './components/backOffice/product/product-details/product-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
    CategoriesComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
