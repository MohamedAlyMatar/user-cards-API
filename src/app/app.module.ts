import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule 
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this if using custom elements
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
