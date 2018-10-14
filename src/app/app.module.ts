import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {UserListComponent} from "./components/users/ui/user-list/user-list.component";
import {UserSummaryComponent} from "./components/users/ui/user-summary/user-summary.component";
import {LandingPageComponent} from "./components/landing-page/ui/landing-page.component";
import {MenuComponent} from "./components/common/ui/menu/menu.component";
import {UserDetailsComponent} from "./components/users/ui/user-details/user-details.component";
import {UserService} from "./components/users/service/user.service";
import {TemplateComponent} from "./components/common/ui/template/template.component";
import {HeaderComponent} from "./components/common/ui/header/header.component";
import {AddUserComponent} from "./components/users/ui/add-user/add-user.component";
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {RolesListComponent} from "./components/roles/ui/roles-list/roles-list.component";
import {RolesSummaryComponent} from "./components/roles/ui/roles-summary/roles-summary.component";
import {AddRolesComponent} from "./components/roles/ui/add-roles/add-roles.component";
import {RolesService} from "./components/roles/service/roles.service";
import {MatTableModule, MatOptionModule, MatSelectModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoggerService} from "./components/common/service/logger.service";
import {ConsoleLoggerService} from "./components/common/service/console-logger.service";
import {DropdownModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSummaryComponent,
    LandingPageComponent,
    MenuComponent,
    TemplateComponent,
    HeaderComponent,
    MenuComponent,
    UserDetailsComponent,
    AddUserComponent,
    RolesListComponent,
    RolesSummaryComponent,
    AddRolesComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatOptionModule,
    HttpClientModule,
    MatTableModule,
    DropdownModule,
    CommonModule,

    RouterModule.forRoot([
      {
        path: 'users',
        component: UserListComponent
      },

      {
        path: 'users/add',
        component: AddUserComponent
      },
      {
        path: 'users/:action/:username',
        component: UserDetailsComponent
      },
      {
        path: 'roles',
        component: RolesListComponent
      },
      {
        path: 'roles/add',
        component: AddRolesComponent
      },
      {
        path: '',
        component: LandingPageComponent
      }
    ]),
  ],
  providers: [UserService, RolesService, { provide: LoggerService, useClass: ConsoleLoggerService } ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
