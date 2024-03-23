import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AppComponent } from "../../app.component";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [HeaderComponent, AppComponent, HomeComponent]
})
export class LayoutComponent {

}
