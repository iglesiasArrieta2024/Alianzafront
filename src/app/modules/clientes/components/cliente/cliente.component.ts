import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteservicesService } from 'src/app/modules/shared/services/clienteservices.service';

@Component({
  selector: 'app-cliente',
  templateUrl:'./cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteservice: ClienteservicesService) { }

   getClientes():void{
      this.clienteservice.GetClientes().subscribe((data:any)=>{
            console.log("clientes",data);
            this.processClient(data);
      },(error:any)=>{
        console.log("error",error);
      })
   }

   processClient(respo:any){
      const dataClient: ClienteElement [] = [];
      if(respo.metadata[0]=="00"){
        let lista = respo.clienteResponse.clientes;
        lista.forEach((element: ClienteElement) => {
          dataClient.push(element);
        });
        this.dataSource= new MatTableDataSource<ClienteElement>(dataClient);
      }
   }

  ngOnInit(): void {
    this.getClientes();
  }
  displayedColumns: string[] = ['id', 'usuario', 'nombre','corr' ,'tel','fecha','actions'];
  dataSource= new MatTableDataSource<ClienteElement>();

}

export interface ClienteElement{
  sharedkey:string;
  id:number;
  businessid:string;
  email:string;
  phone:string;
  dataadded:Date;
}
