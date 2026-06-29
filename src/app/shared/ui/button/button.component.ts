import { CommonModule } from "@angular/common";
import { Component, input, output } from "@angular/core";
import { ButtonType } from "./button.type";
import { FormsModule } from "@angular/forms";


@Component({
    selector: "button-component",
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: "./button.component.html"
})
export class ButtonComponent{
    text = input<string>("button");
    type = input<ButtonType>("button");
    
    onClick = output<void>();

    onButtonClickHandler(){
        this.onClick.emit();
    }

}