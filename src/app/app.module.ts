import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    LandingPageComponent
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
