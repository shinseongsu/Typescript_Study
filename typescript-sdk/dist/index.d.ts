import { Store } from './types';
import globalThis from 'globalthis';
declare global {
    interface Window {
        store: Store;
    }
}
declare function baroPayments(): {
    requestPayment: () => void;
    testConsole: () => void;
};
declare const _default: {
    baroPayments: typeof baroPayments;
    globalThis: typeof globalThis;
};
export default _default;
