import zoid from 'zoid';
import { config } from '../../config';

console.log('Config:', config);

const helloWorld = zoid.create({
  tag: 'hello-world',
  url: `${config.baseUrl}/child.html`,
  dimensions: {
    width: '600px',
    height: '400px',
  },
  prerenderTemplate() {
    const html = document.createElement('html');
    html.innerHTML = '<body>Pre-render</body>';
    return html;
  },
  props: {
    username: {
      type: 'string',
      required: true,
    },
    onLogin: {
      type: 'function',
      required: true,
    },
    somethingElse: {
      type: 'string',
      required: false,
    },
  },
});

const element = 'zoid-component';
const options = {};

helloWorld.render(options, element);
