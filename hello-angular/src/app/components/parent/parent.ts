import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  // common for *ngFor, *ngIf; forms for [(ngModel)]
  imports: [CommonModule, FormsModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  
  // .ts file of an Angular component defines data + behaviors of component
  
  // Define an array to render multiple child components
  // :number[] is typescript defining type of arr
  arr:number[] = [1, 2, 3, 4, 5]

  // Defining a function linked to a button
  showSurprise() {
    alert("HELLO!")
    this.hideElement = !this.hideElement;
  }

  // Show or hide
  hideElement:boolean = true;

  // User input to nameInput
  nameInput:string = "";

  index:number = 0;

}
