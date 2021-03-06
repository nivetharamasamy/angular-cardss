import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}