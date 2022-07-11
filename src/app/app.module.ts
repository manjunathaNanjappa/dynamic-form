import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { FormDataService } from 'src/shared/form-data.service';

@NgModule({
  declarations: [AppComponent, DynamicFormComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FormDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
