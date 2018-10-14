import { NgModule } from "@angular/core";
import {LoggerService} from "../common/service/logger.service";
import {ConsoleLoggerService} from "../common/service/console-logger.service";
import {RolesListComponent} from "./ui/roles-list/roles-list.component";
import {RolesSummaryComponent} from "./ui/roles-summary/roles-summary.component";
import {AddRolesComponent} from "./ui/add-roles/add-roles.component";
import {RouterModule, Routes} from "@angular/router";
import {MatOptionModule, MatSelectModule, MatTableModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


const secondaryRoutes: Routes = [
  { path: 'roles',  component: RolesListComponent },
  { path: 'roles/add', component: AddRolesComponent }
];

@NgModule({
  imports : [
    RouterModule.forChild(secondaryRoutes),
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],

  declarations: [
    RolesListComponent,
    RolesSummaryComponent,
    AddRolesComponent
  ],
  exports: [
    RolesListComponent,
    RolesSummaryComponent,
    AddRolesComponent],
  providers: [{ provide: LoggerService, useClass: ConsoleLoggerService } ],

})
export class RolesModule {}
