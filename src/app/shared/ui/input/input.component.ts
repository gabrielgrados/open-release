import { CommonModule } from "@angular/common";
import { Component, input, model } from "@angular/core";
import { InputType } from "./input.type";
import { FormsModule } from "@angular/forms";
import { FieldState, FieldTree, FormField, ValidationError } from "@angular/forms/signals";

@Component({
    selector: "input-component",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./input.component.html"
})
export class InputComponent{
    value = model<string>("");
    touched = model<boolean>(false);
    disabled = input<boolean>(false);
    errors = input<readonly ValidationError[]>([]);

    label = input<string>("Label");
    type = input<InputType>("text");
    placeholder = input<string>("placeholder");
    errorMessages = input<Record<string, string>>({});
    autocomplete = input<boolean>(false);

    onInput(event:Event){
        const target = event.target as HTMLInputElement;
        this.value.set(target.value);
    }
}