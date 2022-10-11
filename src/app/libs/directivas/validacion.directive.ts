import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appValidacion]'
})
export class ValidacionDirective implements OnInit{
 
  @HostListener('click') mouseClick(){
    console.log('Presiono el mouse');

 
    
   }

  constructor() {
    
   }
 
  ngOnInit(): void {
    console.log('Ingreso a la directiva');
  }

}
