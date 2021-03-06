import { NgModule } from '@angular/core';
//Allows you to run the application in a browser
import { BrowserModule } from '@angular/platform-browser';

//Import Component
import { AppComponent } from './app.component';

//Create a decorator
//A decorator modifies an instance before it will be used.
//App Module creates a foundation for the app
@NgModule({
    imports : [BrowserModule],
    //Declare Component
    declarations : [ AppComponent ],
    //Initialize Component
    bootstrap : [ AppComponent ]
})

export class AppModule{}