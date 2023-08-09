import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/general/navigation/navigation.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        component: BodyComponent,
        path: 'home',
        data: {
          breadcrumb: "menu.enterprise"
        },
        loadChildren: () => import('./components/body/body.module').then(m => m.BodyModule)
      },
    ]
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
