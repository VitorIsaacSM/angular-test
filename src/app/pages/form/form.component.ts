import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading/loading.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form = new FormArray([]);
  campos = [];


  constructor(private router: Router, private api: ApiService, private loading: LoadingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.update();
  }

  update() {
    this.loading.showLoading();
    this.api.getForm().subscribe((res: any[]) => {
      this.form = new FormArray([]);
      res.forEach(a => {
        this.form.push(new FormControl(a.valor, [Validators.required]));
      })
      this.loading.hideLoading();
      this.campos = res;
    })
  }

  salvar() {
    if (this.form.invalid) {
      this.form.controls.forEach(c => {
        c.markAsDirty();
        c.markAsTouched();
      })
      return;
    }
    const data = this.form.value.map((a, index) => {
      console.log(a);
      return {
        valor: a,
        tipo: this.campos[index].tipo,
        id: this.campos[index].id
      }
    })
    this.loading.showLoading();
    this.api.postForm(data).subscribe(() => {
      this.toastr.success('Formulário salvo com sucesso')
      this.loading.hideLoading();
    }, (error) => {
      this.loading.hideLoading();
      this.toastr.error(error.error.message)
    })
  }

  toTabela() {
    this.router.navigate(['tabela'])
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}
