import { Routes } from '@angular/router';
import { EjemplosDirectivasComponent } from './ejemplos-directivas/ejemplos-directivas.component';
import { EjemploPipesComponent } from './ejemplo-pipes/ejemplo-pipes.component';

export const routes: Routes = [
    {path: "directivas", component: EjemplosDirectivasComponent},
    {path: "pipes", component: EjemploPipesComponent}
];
