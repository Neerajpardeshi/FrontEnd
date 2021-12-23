import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { MenuComponent } from './menu/menu.component';






import { RegisterComponent } from './register/register.component';
import { GreetEmpComponent } from './greet-emp/greet-emp.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,

    RegisterComponent,
    GreetEmpComponent,
    SearchComponent,
    UpdateComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
