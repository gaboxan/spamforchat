import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { SpamsUserComponent } from './spams-user/spams-user.component';

import { XdComponent } from './xd/xd.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: XdComponent },
  { path: 'spams', component: SpamsUserComponent,canActivate:[AuthGuard] },
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
