import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  animals=[
    {nev:"Ödön", fajta:"Viziló", neme:"hím"},
    {nev:"Gedeon", fajta:"Gúnár", neme:"hím"},
    {nev:"Ludmilla", fajta:"Orszarvú", neme:"nőstény"},
  ]

  constructor() { }

  getAnimals(){
    return this.animals
  }

  addAnimal(animal:any){
    this.animals.push(animal)
  }

  deleteAnimal(animal:any){
    this.animals=this.animals.filter(
      (elem)=>{return elem!=animal}
    )
  }

}
