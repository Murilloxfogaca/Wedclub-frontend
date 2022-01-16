import '@eduzz/houston-forms/yupLocale';

import * as ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.unregister();
  });
}
