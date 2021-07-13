import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './coponents/tarjetas/tarjetas.component';
import { TarjetaCreditoComponent } from './coponents/tarjetas/tarjeta-credito/tarjeta-credito.component';
import { ListTarjetaCreditoComponent } from './coponents/tarjetas/list-tarjeta-credito/list-tarjeta-credito.component';
import { FooterComponent } from './coponents/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    TarjetaCreditoComponent,
    ListTarjetaCreditoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
