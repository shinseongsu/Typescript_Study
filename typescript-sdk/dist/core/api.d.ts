import { NewsFeed, NewsDetail } from '../types';
export default class Api {
    ajax: XMLHttpRequest;
    url: string;
    constructor(url: string);
    getRequest<AjaxResponse>(): AjaxResponse;
}
export declare class NewsFeedApi extends Api {
    constructor(url: string);
    getData(): NewsFeed[];
}
export declare class NewsDetailApi extends Api {
    constructor(url: string);
    getData(): NewsDetail;
}
