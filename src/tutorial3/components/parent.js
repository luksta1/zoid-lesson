import zoid from 'zoid';
import { config } from '../../config';

const element = 'zoid-component';
const options = {
  alternateText: 'People',
  updateBackgroundColor: (elementId, color) => {
    const el = document.querySelector(`#${elementId}`);
    el.style.backgroundColor = color;
  },
};

const helloWorld = zoid.create({
  tag: 'hello-world', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}/child.html`,
});

helloWorld.render(options, element);
