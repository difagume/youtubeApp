import { Pipe, PipeTransform } from '@angular/core';
//import para asegurarnos que el codigo q se va a poner esté limpio
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  //decalro en constructore para inicializarlo y usarlo
  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string, url: string): any {

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
