import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteservicesService } from 'src/app/modules/shared/services/clienteservices.service';
import { NewClienteComponent } from '../new-cliente/new-cliente.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-cliente',
  templateUrl:'./cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  data_added: Date = new Date();

  constructor(private clienteService: ClienteservicesService,private dialog: MatDialog) { 
    
  

  }
 // private snackBar = inject(MatSnackBar);
  //public dialog = inject(MatDialog);
  ngOnInit(): void {
    this.getClientes();
  }
   getClientes():void{
      this.clienteService.GetClientes().subscribe((data:any)=>{
            console.log("clientes",data);
            this.processClient(data);
      },(error:any)=>{
        console.log("error",error);
      })
   }

   processClient(repo: any){
      const dataClient: ClienteElement [] = [];
      if(repo.metadata[0]=="00"){
        let lista = repo.clienteResponse.clientes;
        lista.forEach((element: ClienteElement) => {
          dataClient.push(element);
        });
        this.dataSource= new MatTableDataSource<ClienteElement>(dataClient);
      }
   }

   openDialog() {
    const dialogRef = this.dialog.open( NewClienteComponent, {
      width: '450px',
      
    });

    dialogRef.afterClosed().subscribe((result:any) => {
     
    });
   }


  

 
  //displayedColumns: string[] = ['id', 'email', 'business_id','data_added' ,'phone','shared_key','action'];
  displayedColumns: string[] = ['id','shared_key', 'business_id','email','phone','data_added' ,'action']; 
  
  //displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource= new MatTableDataSource<ClienteElement>();

}

export interface ClienteElement{
  id:number;
  shared_key:string;
  business_id:string;
  email:string;
  phone:string;
  data_added:Date;
}
