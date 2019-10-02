import { EventsModule } from "./pages/events/events.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AutocompleteFieldModule } from './components/autocomplete-field/autocomplete-field.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EventsModule,
    AutocompleteFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
