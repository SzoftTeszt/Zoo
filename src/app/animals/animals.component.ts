import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent {
  oszlopok=["nev","fajta","neme"]
  animals:any=[]
  newAnimal:any={}

  constructor(private base:BaseService){
    this.animals=base.getAnimals()
  }

  addAnimal(){
    this.base.addAnimal(this.newAnimal)
    this.animals=this.base.getAnimals()
    this.newAnimal={}
  }

  deleteAnimal(animal:any){
    this.base.deleteAnimal(animal)
    this.animals=this.base.getAnimals()
  }

}
