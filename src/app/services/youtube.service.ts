import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

  private youtubeUrl='https://www.googleapis.com/youtube/v3';
  private apikey='AIzaSyBHAZb12_tGpd_bJ-6VTToIlnZw72FB1-g';
  private playlist='UUPT5Q93YbgJ_7du1gV7UHQQ';
  private nextPageToken='';

  constructor(public http:HttpClient) { }

  getVideos(){
    let url = `${ this.youtubeUrl }/playlistItems`;

    let params = new HttpParams();
    params = params.append('part','snippet');
    params = params.append('maxResults','10');
    params = params.append('playlistId',this.playlist);
    params = params.append('key',this.apikey);

    console.log('params',params);

    return this.http.get(url,{params: params})
    .map(res=>{
      console.log(res);

      this.nextPageToken=res['nextPageToken'];

      let videos:any[]=[];
      for(let video of res.items){
        // console.log('item',video);
        let snippet=video.snippet;
        videos.push(snippet);
      }

      return videos;
    });
  }

}
