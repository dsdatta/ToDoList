import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './to-do-list/details/details.component';
import { HomeComponent } from './to-do-list/home/home.component';

const routes: Routes = [ {//default route
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{ path: 'home', //home view
  component: HomeComponent,

  data: {
    title: 'home',
    breadcrumb: [
      {
        label: 'Accueil',
        url: ''
      }
    ]
  }
},
  {
    path: 'details/:id', //details view
    component: DetailsComponent,

    data: {
      title: 'details',
      breadcrumb: [
        {
          label: 'Accueil',
          url: '/home'
        },
        {
          label: 'Détails',
          url: ''
        }
      ]
    },

  },
  {//invalid route
    path: "**",
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
