import { Component } from '@angular/core';
import { TranslatorService } from '../../services/translator-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  // Constructor injection - this component needs the translate service
  constructor(public translatorService:TranslatorService) {}
}
