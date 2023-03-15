import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient, private router:Router) { 
    this.loginForm = this.formBuilder.group({
      userName:[''],
      password:[''],
    })
  }

  ngOnInit(): void {
  }

  sendLogin(data:any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/login',data);
  }

  onSubmit(){
    console.warn(this.loginForm.value)
    this.sendLogin({correoUsuario:this.loginForm.value.userName, contrasena:this.loginForm.value.password}).subscribe(data =>{
      
      localStorage.setItem("token", data.token);
      this.router.navigate(["/inicio"]);
    })
    
  }

}
