// Written by Dr. Zub
import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'momentjs',
})
export class MomentjsPipe implements PipeTransform {

  transform(value: string, ...args) {
    return moment(value).fromNow();
  }
  
}
