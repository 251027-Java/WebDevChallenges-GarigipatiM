import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemoninterface } from '../interfaces/pokemoninterface';

@Injectable({
  providedIn: 'root',
})
export class Pokemonservice {
  //TODO: Array of caught pokemon
  
  // Inject HTTPClient to make HTTP Requests
  constructor(private http:HttpClient) {}

  // Method to get one pokemon (hardcode)
  getPokemon():Observable<Pokemoninterface> {
    const randomNum:number = Math.floor(Math.random() * 1025) + 1;

    // <> is generic like in Java
    /* Use pipe() to transform incoming data into Pokemon object
    Use map() to take the data and fit into Pokemon's fields*/
    
    return this.http.get<Pokemoninterface>(`https://pokeapi.co/api/v2/pokemon/${randomNum}`).pipe(
      map<any, Pokemoninterface>(data => ({
        /** map<IncomingDataType, OurDataType */
        id:data.id,
        name:data.name,
        sprite:data.sprites.front_default
      }))
    );
  }
}
