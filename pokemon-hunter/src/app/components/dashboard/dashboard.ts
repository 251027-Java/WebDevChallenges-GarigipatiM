import { Component } from '@angular/core';
import { Pokemonservice } from '../../services/pokemonservice';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(public pokemonService:Pokemonservice) {}
}
