import zoid from 'zoid'
import { config } from '../../config'

const helloWorld = zoid.create({
  tag: 'hello-world', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}/child.html`
});

const element = document.querySelector('#hello');
element.innerHTML = `Hello ${window.xprops.alternateText}`;

document.addEventListener('click', () => {
  window.xprops.updateBackgroundColor('bgDiv', 'black');
}, false);
