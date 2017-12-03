import template from './template.js';

class Artwork {
  constructor() {}

  init() {
    this.generateAzulejo();
  }

  generateAzulejo() {
    const svg = document.querySelector('#artwork-wrapper svg');
    const SIZE = 90;
    const SHIFT = (2.5 / 100) * SIZE;

    const svgBound = svg.getBoundingClientRect();
    const maxHeight = Math.ceil(svgBound.height / SIZE);
    const maxWidth = Math.ceil(svgBound.width / SIZE);

    const background = `<rect id="base" width="${svgBound.width}" height="${svgBound.height}"/>`;

    let tiles = '';
    for (let j = 0; j < maxHeight; j++) {
      for (let i = 0; i < maxWidth; i++) {
        let angel = '';

        if (j % 2) {
          angel =  i % 2 ? 180 : 270;
        } else {
          angel =  i % 2 ? 90 : 0;
        }

        const transform = `transform="translate(${(SIZE + SHIFT) * i} ${(SIZE + SHIFT) * j}) 
              rotate(${angel} ${SIZE/2} ${SIZE/2})"`;

        tiles = tiles + `<use xlink:href="#tile" width=${SIZE} height=${SIZE} ${transform}/>`
      }
    }

    svg.innerHTML = `${background} ${template} ${tiles}`;
  }
}

export default Artwork;
