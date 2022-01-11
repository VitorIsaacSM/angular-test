import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
  });

  constructor(private api: ApiService, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.form.invalid) {
      this.form.controls.email.markAsDirty();
      this.form.controls.email.markAsTouched();
      this.form.controls.senha.markAsDirty();
      this.form.controls.senha.markAsTouched();
      this.toastr.error("form is invalid");
      return;
    }
    this.api.login(this.emailControl.value, this.passwordControl.value).subscribe(() => {
      this.router.navigate(['tabela'])
    }, (error) => {
      console.log(error)
      this.toastr.error(error.error.message);
    });
    // console.log("form data is correct", this.form.value);
  }

  get emailControl() {
    return this.form.controls.email;
  }

  get passwordControl() {
    return this.form.controls.senha;
  }
}
