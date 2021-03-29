import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../Models/pokemon/pokemon';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public pokemon: number;
  public cards: Pokemon[];
  public editName: boolean;
  public editType: boolean;
  public editLvl: boolean;
  public editEvo: boolean;
  public editPreevo: boolean;
  public editImage: boolean;
  public editAbilities: boolean;

  public editedName: string;
  public editedType: string[];
  public editedLvl: number;
  public editedEvo: string;
  public editedPreevo: string;
  public editedImage: string;
  public editedAbilities: string[];

  constructor(
    private _route: ActivatedRoute,
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
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png","Caterpie",['Bicho'],5,"-","Metapod",['Placaje', 'Gruñido','Picotazo venenoso','Disparo Demora']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png","Metapod",['Bicho'],11,"Caterpie","Butterfree",['Placaje', 'Endurecer','Picotazo venenoso','Disparo Demora']),
      new Pokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png","Butterfree ",['Bicho'],19,"Metapod","-",['Confucion', 'Polvo veneno','Picotazo venenoso','Mordisco']),
    ]
      this.pokemon = this._route.snapshot.params.pokemon;
      this.editName = false;
  }

  editarName(){
    this.editName = true
  }
  editarType(){
    this.editType = true
  }
  editarLvl(){
    this.editLvl = true
  }
  editarEvo(){
    this.editEvo = true
  }
  editarPreevo(){
    this.editPreevo = true
  }
  editarImage(){
    this.editImage = true
  }
  editarAbilities(){
    this.editAbilities = true
  }

  enviarNuevoName(){
    this.cards[this.pokemon].name = this.editedName 
    this.editName = false
  }
  enviarNuevoType(){
    this.cards[this.pokemon].type = this.editedType
    this.editType = false
  }
  enviarNuevoLvl(){
    this.cards[this.pokemon].lvl = this.editedLvl
    this.editLvl = false
  }
  enviarNuevoEvo(){
    this.cards[this.pokemon].evo = this.editedEvo
    this.editEvo = false
  }
  enviarNuevoPreevo(){
    this.cards[this.pokemon].preevo = this.editedPreevo
    this.editPreevo = false
  }
  enviarNuevoImage(){
    this.cards[this.pokemon].image = this.editedImage 
    this.editImage = false
  }
  enviarNuevoAbilities(){
    this.cards[this.pokemon].abilities = this.editedAbilities
    this.editAbilities = false
  }
  ngOnInit(): void {
  }

}
