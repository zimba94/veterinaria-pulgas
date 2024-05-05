import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cita } from '../models/cita.model';




@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  private transformarCitas( resultados: any[] ): Cita[] {

    return resultados.map(
      cita => new Cita(cita.fecha, cita.hora, cita.cliente, cita.mascota, cita.razon, cita.atendida)  
    );
  }


  buscar( 
      tipo: 'citas',
      termino: string
    ) {

      const citas = localStorage.getItem('citas') || '[]'

      switch ( tipo ) {
        case 'citas':
          return this.transformarCitas( JSON.parse(citas) )
        default:
          return [];
      }
  }


}
