import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private loading: LoadingService) { }
  columns = [];
  data = []

  ngOnInit() {
    this.update();
  }

  update() {
    this.loading.showLoading();
    this.api.getTabela().subscribe(res => {
      console.log(res);
      this.columns = Object.keys(res[0]);
      this.data = res as any;
      this.loading.hideLoading();
    })
  }

  toForm() {
    this.router.navigate(['form'])
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
