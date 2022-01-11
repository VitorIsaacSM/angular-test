import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { switchMap } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email, senha) {
    return this.http.post(`${environment.api}/login`, { email, senha })
    .pipe(switchMap((data: {token: string}) => {
      console.log(data);
      localStorage.setItem('token', data.token)
      return of(data);
    }))
  }

  cadastro(body) {
    return this.http.post(`${environment.api}/cadastro`, body)
  }

  getTabela() {
    return this.http.get(`${environment.api}/tabela`);
  }

  getForm() {
    return this.http.get(`${environment.api}/formulario`);
  }

  postForm(data) {
    return this.http.post(`${environment.api}/formulario`, data);
  }
}
