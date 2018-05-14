import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {UserListComponent} from './components/users/user-list/user-list.component';
import {UserSummaryComponent} from './components/users/user-summary/user-summary.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {MenuComponent} from './components/common/menu/menu.component';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {UserService} from "./services/user.service";
import {TemplateComponent} from "./components/common/template/template.component";
import {HeaderComponent} from "./components/common/header/header.component";
import { AddUserComponent } from './components/users/add-user/add-user.component';


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
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'users',
      component: UserListComponent
    },
      {
        path: 'users/:action/:username',
        component: UserDetailsComponent
      },
      {
        path: 'users/add/',
        component: AddUserComponent
      },
      {
        path: '',
        component: LandingPageComponent
      }
    ]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
