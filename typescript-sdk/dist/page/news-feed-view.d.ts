import View from '../core/view';
export default class NewsFeedView extends View {
    private api;
    private feeds;
    constructor(containerId: string);
    render: (page?: string) => void;
    private makeFeeds;
}
