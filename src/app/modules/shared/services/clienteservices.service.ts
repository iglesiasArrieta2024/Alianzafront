import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class ClienteservicesService {

  constructor(private http: HttpClient) { 


  }

  /*
  metodo para traer todos los clientes del servicio 
  */
  GetClientes(){
    const endpoint = `${base_url}clientes`;
    return this.http.get(endpoint);
  }

  saveCliente(body: any){
    const endpoint = `${base_url}clientes`;
    return this.http.post(endpoint, body)
  }
}
