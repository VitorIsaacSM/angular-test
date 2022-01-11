import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { FormComponent } from "./pages/form/form.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { TabelaComponent } from "./pages/tabela/tabela.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "tabela",
    component: TabelaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "form",
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
