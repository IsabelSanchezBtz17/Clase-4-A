import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DosComponent } from './components/dos/dos.component';
import { ValidacionDirective } from './libs/directivas/validacion.directive';

@NgModule({
  declarations: [
    AppComponent,
    DosComponent,
    ValidacionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
