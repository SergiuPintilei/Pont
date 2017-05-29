import { Http, Response } from '@angular/http';
import { Component, Injectable, Inject, OnInit, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';


export let YOUTUBE_API_KEY = 'AIzaSyCWe2M9K6arHsUlbbpO_22mb1w2EqT0QAY';
export let YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.id = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}

@Injectable()
export class YouTubeService {
    constructor(private http: Http,
                @Inject(YOUTUBE_API_KEY) private apiKey: string,
                @Inject(YOUTUBE_API_URL) private apiUrl: string) { }

    search(query: string): Observable<SearchResult[]> {
        let params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');
        let queryUrl = `${this.apiUrl}?${params}`;

        return this.http.get(queryUrl)
            .map((response: Response) => {
                return (<any>response.json()).items.map(item => {
                    return new SearchResult({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnailUrl: item.snippet.thumbnails.default.url
                    });
                });
            });
    }
}

export let youTubeServiceInjectables: Array<any> = [
    {provide: YouTubeService, useClass: YouTubeService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];


@Component({
    selector: 'search-box',
    template: `<input type="text" placeholder="Search" autofocus>`
})
export class SearchBox implements OnInit {
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(private youtube: YouTubeService, private el: ElementRef) {
    }

    ngOnInit(): void {
        // convert the `keyup` event into an observable stream
        Observable.fromEvent(this.el.nativeElement, 'keyup')
                        .map((e: any) => e.target.value) // extract the value of the input
                        .filter((text: string) => text.length > 1) // filter out if empty
                        .debounceTime(250) // only once every 250ms
                        .do(() => this.loading.next(true)) // enable loading
                        // search, discarding old events if new input comes in
                        .map((query: string) => this.youtube.search(query))
                        .switch()
                        .subscribe(
                            (results: SearchResult[]) => { // on success
                                this.loading.next(false);
                                this.results.next(results);
                            },
                            (err: any) => { // on error
                                console.log(err);
                                this.loading.next(false);
                            },
                            () => { // on completion
                                this.loading.next(false);
                            }
                        );
    }
}

@Component({
    selector: 'search-result',
    template: `
    <div class="youtube-col-sm-6">
        <div>
            <img src="{{result.thumbnailUrl}">
            <div>
                <h3>{{result.title}}</h3>
                <p>{{result.description}}</p>
                <p><a href="{{result.videoUrl}}" role="button">Watch</a></p>
            </div>
        </div>
    </div>`
})
export class SearchResultComponent {
    @Input() result: SearchResult;
}

@Component({
    selector: 'youtube-search',
    template: `
    <div>
        <div>
            <h1>YouTube Search
                <p *ngIf="loading">Loading</p>
            </h1>
        </div>
        <div>
            <div>
                <search-box (loading)="loading = $event"
                            (results)="updateResults($event)"></search-box>
            </div>
        </div>
        <div>
            <search-result *ngFor="let result of results" [result]="result"></search-result>
        </div>
    </div>
    `
})
export class YouTubeSearchComponent {
    results: SearchResult[];

    updateResults(results: SearchResult[]): void {
        this.results = results;
    }
}
