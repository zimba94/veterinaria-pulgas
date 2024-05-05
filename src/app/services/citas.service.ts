import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor() { }

  postCitas(citas: Cita[]){
    localStorage.setItem('citas', JSON.stringify(citas));
  }

  getCitas(){
    const citas = localStorage.getItem('citas') || '[]'
    return JSON.parse(citas);
  }
}
