import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdAlertBasicComponent } from './clients/client.component';
import { CompaniesComponent } from './companies/companies.component';
import { CouponsComponent } from './coupons/coupons.component';
import { UsersComponent } from './users/users.component';
import { FillingStationsComponent } from './filling-stations/filling-stations.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdAlertBasicComponent,
  ],
  declarations: [
    CompaniesComponent,
    CouponsComponent,
    UsersComponent,
    FillingStationsComponent,
    HistoryComponent
  ],
})
export class ComponentsModule {}
