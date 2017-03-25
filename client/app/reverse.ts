/**
 * Created by Tomer on 25/03/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value) {
        if (!value) return;

        return value.reverse();
    }
}