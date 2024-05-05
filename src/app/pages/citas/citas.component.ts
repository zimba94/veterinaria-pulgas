import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/cita.model';
import Swal from 'sweetalert2';
import { BusquedasService } from '../../services/busquedas.service';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  public citas: Cita[] = [];
  public citasTemp: Cita[] = [];

  public cargando: boolean = true;


  constructor( private citasService: CitasService){

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCitas()
    }, 1500);
  }
  
  getCitas(){
    this.citas = this.citasService.getCitas();
    this.citas = this.citas.filter(cita => !cita.atendida)
    this.cargando = false;
  }

  guardarCambios(cita: Cita){
    console.log()
    this.citasService.postCitas(this.citas);
    Swal.fire('Actualizado', `Se actualizó la cita de ${cita.mascota}`, 'success')
    // this.getCitas();
  }

  atenderCita(cita: Cita){
    cita.atendida = true
    console.log(this.citas)
    this.citasService.postCitas(this.citas);
    this.getCitas();
    Swal.fire('Atendida', `Se atendió la cita de ${cita.mascota}`, 'success')
  }

  async abrirSweetAlert(){


    const { value: nuevaCita } = await Swal.fire({
      title: "Registrar cita",
      html: `
        <input id="swal-input1" class="swal2-input" type="date" placeholder="Fecha de la cita">
        <input id="swal-input2" class="swal2-input" type="time" placeholder="Hora de la cita">
        <input id="swal-input3" class="swal2-input" type="text" placeholder="Nombre del cliente">
        <input id="swal-input4" class="swal2-input" type="text" placeholder="Nombre de la mascota">
        <input id="swal-input5" class="swal2-input" type="text" placeholder="Razón de la cita">
      `,
      focusConfirm: false,
      preConfirm: () => {


        const fecha = (<HTMLInputElement>document.getElementById("swal-input1"))!.value;
        const hora = (<HTMLInputElement>document.getElementById("swal-input2"))!.value;
        const cliente = (<HTMLInputElement>document.getElementById("swal-input3"))!.value;
        const mascota = (<HTMLInputElement>document.getElementById("swal-input4"))!.value;
        const razon = (<HTMLInputElement>document.getElementById("swal-input5"))!.value;

        return new Cita(fecha, hora, cliente, mascota, razon, false);
      }
    });

    console.log(nuevaCita)

    this.citas.push(nuevaCita);
    this.guardarCambios(nuevaCita);
  }



}
