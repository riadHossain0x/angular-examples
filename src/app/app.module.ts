import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipeService } from './summary-pipe.service';
import { ValidNumberPipe } from './valid-number.pipe';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipeService,
    ValidNumberPipe,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
