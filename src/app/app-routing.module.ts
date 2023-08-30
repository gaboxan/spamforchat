import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { SpamsUserComponent } from './spams-user/spams-user.component';

import { XdComponent } from './xd/xd.component';

const routes: Routes = [
  { path: '', component: XdComponent },
  { path: 'spams', component: SpamsUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
