import { calcLikers } from "utils/rating";

// eslint-disable-next-line no-restricted-globals
self.onmessage = (message) => {
  postMessage(calcLikers(message.data));
};
