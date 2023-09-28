import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact';
import { map, of } from 'rxjs';

@Pipe({
  name: 'itemsPerPage',
})
export class ItemsPerPagePipe implements PipeTransform {
  transform(values: Contact[], startIndex: number, endIndex: number): any {
    return values.slice(startIndex, endIndex);
  }
}
