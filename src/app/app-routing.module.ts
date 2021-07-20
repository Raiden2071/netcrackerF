import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthGuard } from './modules/auth/auth.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth/login'},
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'test'},
      { path: 'test', loadChildren: () => import('./modules/test/test.module').then(m => m.TestModule) }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
