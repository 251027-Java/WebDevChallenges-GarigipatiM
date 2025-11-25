import { Component, signal } from '@angular/core';
import { Pokemonservice } from '../../services/pokemonservice';
import { Pokemoninterface } from '../../interfaces/pokemoninterface';

@Component({
  selector: 'app-catch',
  imports: [],
  templateUrl: './catch.html',
  styleUrl: './catch.css',
})
export class Catch {
  // Variable to hold pokemon
  pokemon = signal<any>(null);

  // Inject Dependency
  constructor(private pokemonService:Pokemonservice) {}

  //* ngOnInit runs as soon as component renders
  ngOnInit(){
    alert("Hello")
    this.getPokemon();
  }

  // Method to call getPokemon
  getPokemon() {

    //* When Observable is being returned, we need to SUBSCRIBE to access its data (in this case, the HTTP Response)
    this.pokemonService.getPokemon().subscribe(data => {
      console.log(data)
      this.pokemon.set(data)
    });
  }

}
