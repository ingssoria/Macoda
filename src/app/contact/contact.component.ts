import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mensaje: any = {};
  respuesta: any;

  constructor(private contactServ: ContactService, private router: Router) { }

  ngOnInit() {
  }

  contactar(){

      this.respuesta = {};
      let body = 'name=' + this.mensaje.name + '&email=' + this.mensaje.email + '&subject=' + this.mensaje.subject + '&message=' + this.mensaje.message;
      this.contactServ.contacto(body).subscribe(
          result => {
              if(result === true){
                  console.log(result);
                  this.respuesta.clase = "bg-info";
                  this.respuesta.texto = "Gracias por contactarnos";
              }
              else{
                  this.respuesta.clase = "bg-danger";
                  this.respuesta.texto = "Ha ocurrido un error, por favor intentelo mas tarde";
              }
          },
          error =>{}
      );
      /*let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

      return this.http.post<boolean>('../assets/php/contact_process.php', body, {headers : headers})
          .map
          .subscribe(
              resultado => {
                  if(resultado['status'] == 200)
                    console.log(resultado['status']);

              },
              error=>{
                  console.log(error);
              }
          );*/

      /*return this.http.post<boolean>(this.getUrl('tokens'), body, {headers : headers})
          .map((data) => this.getDatos(data));*/

      //this.respuesta; "Gracias por contactarnos";
  }



}
