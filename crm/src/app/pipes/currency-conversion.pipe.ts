import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion'
})
export class CurrencyConversionPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    var[conversion]  = args;
    return value * conversion;
  }

}

@Pipe({
  name: 'textjoin'
})
export class TextjoinPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    var[second_name]  = args;
    return value + " " + args.join(" ");
    // return value + " " + second_name;
  }

}
