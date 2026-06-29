import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";


@Component({
    selector: "main-component",
    standalone: true,
    imports: [RouterOutlet],
    template:  `
        <router-outlet></router-outlet>
    `
})
export class MainComponent{

}