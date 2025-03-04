import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ActoresService } from '../actores.service';
import { ActorDTO } from '../actores';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { paginacionDTO } from '../../compartidos/modelos/paginacionDTO';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-indice-actores',
  imports: [MatButtonModule,RouterLink,MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {
columnasMostrar: string[] = ['Id', 'Nombre','fechaNacimiento','Foto', 'Accion'];

  actor= inject(ActoresService);
  listaActor!: ActorDTO[];

  dataSource: any;

  paginacion:paginacionDTO={pagina:1, recordsPorPagina:5}
  cantidadTotalRegistros!:number;
  
  constructor(){
    this.cargarListadoActores();
  }

  cargarListadoActores(){
      this.actor.obtenerActoresPaginacion(this.paginacion)
                  .subscribe((resppuesta:HttpResponse<ActorDTO[]>)  =>{
        this.listaActor=resppuesta.body as ActorDTO[];
        console.log(this.listaActor);
        const cabecera= resppuesta.headers.get("cantidad-total-registros") as string;
        this.cantidadTotalRegistros=parseInt(cabecera,10)
        this.dataSource = new MatTableDataSource(this.listaActor);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  actualizarPaginacion(datos: PageEvent){
    this.paginacion ={pagina:datos.pageIndex+1, recordsPorPagina:datos.pageSize}
    this.cargarListadoActores();
  }

  borrar(idUnico:number){
      console.log("Este es el id a eliminar"+idUnico);
      Swal.fire({
        title: "¿Esta seguro de elimnar este registro?",
        text: "Esta accion es irreversible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText:'Cancelar',
        confirmButtonText: "Si, quiero eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.actor.eliminarActor(idUnico).subscribe({
            
            next: (actorEliminar)=>{
            this.cargarListadoActores();
              Swal.fire({
                title: "Se elimino correctamente!",
                text: "Your file has been deleted.",
                icon: "success"
              })
            },
            error: (error:HttpErrorResponse)=>{
              if(error.status === 404){
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Lo sentimos ocurrió un error al eliminar el actor: "+error.statusText,
                });
              }else{
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.message,
                });
              }
            }
  
  
          });
        }
      });
  }
}
