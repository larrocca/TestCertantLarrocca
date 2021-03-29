import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../Models/pokemon/pokemon';
import { Router,ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public cards:Array<Pokemon>;
  public logeado : boolean;
  public open: boolean;
  public pokemon: number;
  public createb: boolean;
  public hide:boolean;
  public hide2:boolean;
  public newPokemon: Pokemon
  
  constructor(
    private _route:ActivatedRoute,
    private _router: Router
  ){
    
    this.cards = [
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png","Bulbasaur",['Planta','Veneno'],5,"-","Yvisaur",['Latigo cepa', 'Placaje','Gruñido','Drenadoras']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png","Yvisaur",['Planta','Veneno'],16,"Bulbasaur","Venasaur",['Latigo cepa', 'Placaje','Gruñido','Drenadoras']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png","Venasaur",['Planta','Veneno'],32,"Yvisaur","-",['Latigo cepa', 'Placaje','Gruñido','Drenadoras']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png","Charmander",['Fuego'],5,"-","Charmeleon",['Ascuas', 'Placaje','Gruñido','Pantalla humo']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png","Charmeleon",['Fuego'],16,"Charmander","Charizard",['Ascuas', 'Arañazo','Gruñido','Pantalla humo']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png","Charizard",['Fuego','Volador'],32,"Charmeleon","-",['Lanza llamas', 'Cuchillazo','Garra dragon','Ataque ala']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png","Squirtle ",['Agua'],5,"- ","Wartortle",['Burbuja', 'Placaje','Gruñido','Rizo defensa']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png","Wartortle",['Agua'],16,"Squirtle","Blastoise",['Pistola agua', 'Placaje','Gruñido','Golpe cabeza']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png","Blastoise",['Agua'],32,"Wartortle","-",['Hidrobomba', 'Golpe Cabeza','Mordisco','Cabezazo']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png","Caterpie",['Bicho'],5,"Metapod","-",['Placaje', 'Gruñido','Picotazo venenoso','Disparo Demora']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png","Metapod",['Bicho'],11,"Butterfree","Caterpie",['Placaje', 'Endurecer','Picotazo venenoso','Disparo Demora']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png","Butterfree ",['Bicho'],19,"-","Metapod",['Confucion', 'Polvo veneno','Picotazo venenoso','Mordisco']),
    ]

    this.newPokemon={
      name:"",
      evo:"",
      image:"",
      lvl:0,
      preevo:"",
      type:[''],
      abilities:['']
    }

    this.logeado = this._route.snapshot.params.logeado;
    this.open = false;
    this.hide = false;
    this.hide2 = true;
  }

  redirect(){
    this._router.navigate(['/login/'])
  }

  create(){
    this.createb = true;
    this.hide=true;
  }
  crearNuevo(){
    this.cards.push(this.newPokemon)
    this.hide = false;
    this.createb = false;
    console.log(this.cards)
  }
  ngOnInit(): void{
  }

}
