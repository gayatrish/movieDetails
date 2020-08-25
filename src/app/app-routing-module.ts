import{NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NgClass } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
const routes : Routes=[
    {
        path: 'singup',
        component : SingupComponent
    },
    {
        path: 'allmovie',
        component : AllMoviesComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents=[SingupComponent,AllMoviesComponent]