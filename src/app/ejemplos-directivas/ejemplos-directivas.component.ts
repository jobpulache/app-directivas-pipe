import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplos-directivas',
  standalone: true,
  imports: [],
  templateUrl: './ejemplos-directivas.component.html',
  styleUrl: './ejemplos-directivas.component.css'
})
export class EjemplosDirectivasComponent {
  mostrarAlumnos = false;
  mostrarCursos = false;

  alumnosLista:  Alumno =[];
  cursosLista: Curso =[];



  VerAlumnos(): void {
    this.mostrarAlumnos = true;
    this.alumnosLista.push({id: 1, nombre: "Job", apellido: "Rios"});
    this.alumnosLista.push({id: 2, nombre: "Nick", apellido: "Rios"});
    this.alumnosLista.push({id: 3, nombre: "laid", apellido: "scock"});  
    this.alumnosLista.push({id: 4, nombre: "David", apellido: "Rios"});
  }

  VerCursos(): void {
    this.mostrarCursos = true;
    this.cursosLista.push({id:1, nombre:'Des web', precio:200});
    this.cursosLista.push({id:2, nombre:'app mobile', precio:800})
    this.cursosLista.push({id:3, nombre:'Base datos 1', precio:200})
    this.cursosLista.push({id:4, nombre:'Analisis datos', precio:100})
  }
}

type Alumno = Array<{
  id: number;
  nombre: string;
  apellido: string
}>;
type Curso = Array<{
  id: number;
  nombre: string;
  precio: number;
}>;