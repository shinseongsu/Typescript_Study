import { RouteInfo } from '../types';
import View from './view';
export default class Router {
    defaultRoute: RouteInfo | null;
    routeTable: RouteInfo[];
    constructor();
    go: () => void;
    setDefaultPage(page: View, params?: RegExp | null): void;
    addRoutePath(path: string, page: View, params?: RegExp | null): void;
    private route;
}
