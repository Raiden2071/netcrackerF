import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';



const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'test'},
      { path: 'test', loadChildren: () => import('./modules/test/test.module').then(m => m.TestModule) }
    ]
  },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
