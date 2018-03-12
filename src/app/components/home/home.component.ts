import { Component, OnInit } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[]=[];
  videoSel:any;

  constructor(public _ys:YoutubeService) {
    this._ys.getVideos().subscribe(videos=>{
      console.log(videos);
      this.videos=videos;
    });
  }

  ngOnInit() {
  }

  verVideo(video:any){
    this.videoSel=video;
    $('#videoModal').modal();
  }

  cerrarModal(){
    this.videoSel=null;
    $('#videoModal').modal('hide');
  }

  cargarMas(){
    // Combino los videos que ya tenía (this.videos) con los videos que me retorna la función dentro de (videos)
    this._ys.getVideos().subscribe(videos=>this.videos.push.apply(this.videos, videos));
  }

}
