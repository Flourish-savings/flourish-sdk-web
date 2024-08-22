import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Flourish } from 'flourish-sdk-web';

@Component({
  selector: 'app-flourish',
  standalone: true,
  templateUrl: './flourish.component.html',
  styleUrl: './flourish.component.css'
})
export class FlourishComponent implements OnInit {

  @Input() token!: string;
  @Input() language: string = 'en';
  @Input() environment!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Initialize the Flourish SDK and append the iframe to the container
    const flourishIframe = Flourish(this.token, this.language, this.environment, this.handleGenericEvent);
    this.elementRef.nativeElement.querySelector('.flourish-container').appendChild(flourishIframe);
  }

  handleGenericEvent(data: any): void {
    console.log('Generic event received:', data);
  }

}
