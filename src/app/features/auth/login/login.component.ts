import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '@app/shared/ui/input/input.component';
import { ButtonComponent } from "@app/shared/ui/button/button.component";
import { form, required, FormField, FormRoot, submit, disabled } from '@angular/forms/signals';
import { LoginData } from '@app/core/models/login/login.model';

@Component({
  selector: 'app-login.component',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [InputComponent, ButtonComponent, FormsModule, ButtonComponent, FormRoot, FormField],
})
export class LoginComponent {
  login = signal<LoginData>({
    username: "",
    password: ""
  });

  isSubmitting = signal(false);
  disabled = signal(true);

  loginForm = form(this.login, path => {
    required(path.username, {message: "Usuario es requerido"})
    required(path.password, {message: "Contraseña es requerida"})
    disabled(path, {
      when: () => this.disabled()
    });
  })
  
  async onSubmitHandler(){
    await submit(this.loginForm, async(form) => {
      this.isSubmitting.set(true);
      try{  
        const value = form().value;
        console.log("Login: ",value)
      }finally{
        this.isSubmitting.set(false);
      }
    })
  }

  activarInputs(){
    this.disabled.update(prev =>  !prev);
  }
  
}
