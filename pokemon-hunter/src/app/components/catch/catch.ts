import { Component, signal, WritableSignal } from '@angular/core';
import { Pokemonservice } from '../../services/pokemonservice';
import { Pokemoninterface } from '../../interfaces/pokemoninterface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-catch',
  imports: [TitleCasePipe],
  templateUrl: './catch.html',
  styleUrl: './catch.css',
})
export class Catch {
  // Variable to hold pokemon
  pokemon:WritableSignal<Pokemoninterface> = signal({id:0, name:"", sprite:""});

  // Inject Dependency
  constructor(private pokemonService:Pokemonservice) {}

  //* ngOnInit runs as soon as component renders
  ngOnInit(){
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

  // Method to catch pokemon and store in service
  catchPokemon() {
    this.pokemonService.caughtPokemon.push(this.pokemon())
    alert("Caught " + this.pokemon().name)
    this.pokemon.set({id:0, name:"", sprite:""})
  }

}
