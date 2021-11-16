import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatTableModule,
} from "@angular/material";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AddCountComponent } from './components/add-count/add-count.component';
import { CounterListComponent } from './components/counter-list/counter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCountComponent,
    CounterListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
