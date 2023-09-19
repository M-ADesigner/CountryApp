import { Component, Input } from '@angular/core';
import { Country } from 'src/app/countries/interfaces/country';

@Component({
  selector: 'shared-tabla',
  templateUrl: './tabla.component.html',
  styles: [],
})
export class TablaComponent {
  @Input()
  public countries: Country[] = [];
}
