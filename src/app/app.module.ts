import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserSummaryComponent } from './components/users/user-summary/user-summary.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { FooterComponent } from './components/common/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSummaryComponent,
    LandingPageComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
    	path:'users',
    	component:	UserListComponent
    },
    {
    	path:'',
    	component:	LandingPageComponent
    }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
