import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // se está logado retorna true e continua para a rota
    if (localStorage.getItem('token')) {
      return true;
    }
    // se nao redireciona para tela de login
    // returnUrl é a url que usuario estava tentando acessar originalmente
    // que pode ser usada pra redireciona-lo de volta quando ele fizer login
    // this.router.navigate([Url.login], { queryParams: { returnUrl: state.url }});
    this.router.navigate(['login']);
    return false;
  }
}
