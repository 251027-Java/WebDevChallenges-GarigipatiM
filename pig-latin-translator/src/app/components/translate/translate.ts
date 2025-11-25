import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatorService } from '../../services/translator-service';

@Component({
  selector: 'app-translate',
  // FormsModule for ngModel, CommonModule for ngIf and ngFor
  imports: [FormsModule, CommonModule],
  templateUrl: './translate.html',
  styleUrl: './translate.css',
})
export class Translate {
  // Constructor Injection
  constructor(public translatorService:TranslatorService) {}

  // input and output
  englishText:string = ""
  pigLatinText:string = ""
  
  // translation function
  translate() {
    if(!this.englishText) {
      alert("Please type something before translating!")
      return;
    }

    if(this.englishText === 'Manu') {
      alert("I don't want to be turned into pig latin!")
      return;
    }

    const words = this.englishText.split(/\b/);

    const translatedWords = words.map(word => {
      if(/^[a-zA-Z]+$/.test(word)) {
        if(/^[aeiouAEIOU]/.test(word)) {
          return word + 'way';
        } else {
          const match = word.match(/^([^aeiouAEIOU]+)(.*)$/);
          return match ? match[2] + match[1] + 'ay' : word;
        }
      }
      return word;
    });

    this.pigLatinText = translatedWords.join('');

    // increment translate counter
    this.translatorService.translationCounter++;
  };
}
