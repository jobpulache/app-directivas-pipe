import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {

  fechaActual = new Date()

  nombres="job pulache"

  monto=2345234.67788

  porcentaje=0.3567

  persona = {
    nombre: "Job",
    apellido: "Pulache",
    edad: 18,
    sexo: "Masculino"
  }
}
