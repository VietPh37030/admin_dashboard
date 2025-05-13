import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from'@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,MatCardModule,MatInputModule,MatIconModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
