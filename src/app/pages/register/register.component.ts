import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    endereco: new FormControl(""),
    telefone: new FormControl(""),
    email: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required, Validators.minLength(8)]),
    confirmSenha: new FormControl("", [Validators.required]),
  });

  constructor(private api: ApiService, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {}

  register() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((c) => {
        c.markAsDirty();
        c.markAsTouched();
      });
      this.toastr.error("form is invalid");
      return;
    }
    if (this.form.value.senha !== this.form.value.confirmSenha) {
      this.toastr.error("As senhas são diferentes");
      return;
    }
    this.api.cadastro(this.form.value).subscribe(res => {
      this.toastr.success('Cadastro realizado com sucesso');
      this.router.navigate(['login'])
    }, error => {
      this.toastr.error(error.error.message)
    })
    // console.log("Register successfull", this.form.value);
  }

  get controls() {
    return this.form.controls;
  }
}
