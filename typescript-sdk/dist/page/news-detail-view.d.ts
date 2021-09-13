import View from '../core/view';
export default class NewsDetailView extends View {
    constructor(containerId: string);
    render: (id: string) => void;
    private makeComment;
}
