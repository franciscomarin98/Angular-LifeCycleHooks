import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  nombre:string = "Francisco";

  constructor() { console.log('Constructor'); }

  ngDoCheck(): void { console.log('ngDoCheck'); }

  ngAfterContentInit(): void { console.log('ngAfterContentInit'); }

  ngAfterContentChecked(): void { console.log('ngAfterContentChecked'); }

  ngAfterViewInit(): void { console.log('ngAfterViewInit'); }

  ngAfterViewChecked(): void { console.log('ngAfterViewChecked'); }

  ngOnDestroy(): void { console.log('ngOnDestroy'); }

  ngOnInit(): void { console.log('ngOnInit'); }

  ngOnChanges():void{ console.log('ngOnChanges'); }

  guardar(){ }

}
