import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  nombre:string = "Francisco";
  segundos:number= 0;
  timerSubscription!:Subscription;

  constructor() { console.log('Constructor'); }

  ngDoCheck(): void { console.log('ngDoCheck'); }

  ngAfterContentInit(): void { console.log('ngAfterContentInit'); }

  ngAfterContentChecked(): void { console.log('ngAfterContentChecked'); }

  ngAfterViewInit(): void { console.log('ngAfterViewInit'); }

  ngAfterViewChecked(): void { console.log('ngAfterViewChecked'); }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
    console.log('Timer detenido');
  }

  ngOnInit(): void {
    this.timerSubscription =interval(1000).subscribe(x=>{
      this.segundos = x;
    })
   }

  guardar(){ }



}
