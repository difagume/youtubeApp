import { Pipe, PipeTransform } from '@angular/core';

// import para asegurarnos que el codigo q se va a poner esté limpio
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  // Declaro en constructore para inicializarlo y usarlo
  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string): any {
    
    let url='https://www.youtube.com/embed/';

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
