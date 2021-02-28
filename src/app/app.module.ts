import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AllDataFromApiService } from './all-data-from-api.service';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AllUsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AllDataFromApiService]
})
export class AppModule { }
