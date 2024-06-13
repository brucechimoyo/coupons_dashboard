import { Routes } from '@angular/router';
import { NgbdAlertBasicComponent } from './clients/client.component';
import { CompaniesComponent } from './companies/companies.component';
import { CouponsComponent } from './coupons/coupons.component';
import { UsersComponent } from './users/users.component';
import { FillingStationsComponent } from './filling-stations/filling-stations.component';
import { HistoryComponent } from './history/history.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        component: NgbdAlertBasicComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'coupons',
        component: CouponsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'filling-stations',
        component: FillingStationsComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
    ],
  },
];
