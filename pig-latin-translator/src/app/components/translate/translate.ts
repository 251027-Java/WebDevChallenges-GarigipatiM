import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-translate',
  // FormsModule for ngModel, CommonModule for ngIf and ngFor
  imports: [FormsModule, CommonModule],
  templateUrl: './translate.html',
  styleUrl: './translate.css',
})
export class Translate {
  // input and output
  englishText:string = ""
  pigLatinText:string = ""
  
  // translation function
  translate() {
    if(!this.englishText) {
      alert("Please type something before translating!")
    }

    if(this.englishText === 'Manu') {
      alert("I don't want to be turned into pig latin!")
    }

    const words = this.englishText.split(' ');

    const translatedWords = words.map(word => {
      if(/^[aeiouAEIOU]/.test(word)) {
        return word + 'way';
      } else {
        const match = word.match(/^([^aeiouAEIOU]+)(.*)$/);
        return match ? match[2] + match[1] + 'ay' : word;
      }
    });

    this.pigLatinText = translatedWords.join(' ');
  }
}
