import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario : any;
  public tempUsuario: any;
  public loged: boolean;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router
  ) { 
    this.loged = false
    this.usuario = {
      user:'admin',
      pass:'1234'
    }
    this.tempUsuario = {
      tempUser:'',
      tempPass:''
    }
    //Objeto user para el usuario
    
  }
  compare(){
    if(this.tempUsuario.tempUser === this.usuario.user && this.tempUsuario.tempPass === this.usuario.pass){
      alert('Logeado correctamente')
      this.loged = true
      this._router.navigate(['/main/',this.loged])
    }  else{
      alert('Usuario o contraseña no valido')
    }
    console.log(this.tempUsuario)
  }

  ngOnInit(): void {
  }

}
