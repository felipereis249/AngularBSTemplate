import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Add the root Routes for sub-modules
const routes: Routes = [
  {
    path: '',
    loadChildren:'./modules/main/main.module#MainModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
