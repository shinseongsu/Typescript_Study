import Router from './core/router';
import { NewsFeedView, NewsDetailView } from './page';
import { Store } from './types';
import globalThis from 'globalthis';

const store: Store = {
  currentPage: 1,
  feeds: [],
};

declare global {
  interface Window {
    store: Store;
  }
}

window.store = store;

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

function baroPayments() {
  return {
    requestPayment: function (): void {
      router.setDefaultPage(newsFeedView);

      router.addRoutePath('/page/', newsFeedView, /page\/(\d+)/);
      router.addRoutePath('/show/', newsDetailView, /show\/(\d+)/);

      router.go();
    },
    testConsole: function (): void {
      console.log('1231231');
    },
  };
}

export default { baroPayments, globalThis };
