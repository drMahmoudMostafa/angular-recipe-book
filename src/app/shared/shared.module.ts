import { ShortenPipe } from './shorten.pipe';
import { LoadingAnimationComponent } from './../loading-animation/loading-animation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoadingAnimationComponent,
    DropdownDirective,
    ShortenPipe
  ],
  declarations: [
    LoadingAnimationComponent,
    DropdownDirective,
    ShortenPipe
  ]
})
export class SharedModule { }
