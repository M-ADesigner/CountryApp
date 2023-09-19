import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Input()
  public placeholderInput: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  public emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
