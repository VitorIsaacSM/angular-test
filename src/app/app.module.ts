import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr"
import { HttpClientModule } from "@angular/common/http";
import { TabelaComponent } from './pages/tabela/tabela.component';
import { FormComponent } from './pages/form/form.component';
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, TabelaComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, CoreModule, BrowserAnimationsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
