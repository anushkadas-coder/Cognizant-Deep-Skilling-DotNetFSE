import { HighlightDirective } from './highlight';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockEl = { nativeElement: document.createElement('div') };
    const directive = new HighlightDirective(mockEl as ElementRef);
    expect(directive).toBeTruthy();
  });
});