class Artwork {
  constructor() {}

  init() {

    const svg = document.querySelector('#artwork-wrapper svg');
    const size = 100;

    const svgBound = svg.getBoundingClientRect();

    const maxHeight = Math.ceil(svgBound.height / size);
    const maxWidth = Math.ceil(svgBound.width / size);

    const background = `<rect id="base" width="${svgBound.width}" height="${svgBound.height}"/>`;

    const defs = `
           <def>
            <symbol id="tile" viewBox="0 0 10 10">
            
             <rect x="0" y="0" width="10" height="10" id="tile-base"/>
            
              <g id="small">
                <rect width="5" height="5" fill="transparent" x="6" y="6"/>

                <ellipse rx="0.4" ry="1" transform="translate(9 9.9) rotate(90 0 0)"/>
                <ellipse rx="0.4" ry="1" transform="translate(9.2 9.2) rotate(135 0 0)"/>
                <ellipse rx="0.4" ry="1" transform="translate(9.9 9) rotate(0 0 0)"/>
              </g>
              
              <g id="middle" fill="#3d83da" stroke="#042373">
                <circle stroke-width="0.2" fill="white" r="6" cx="0" cy="10" stroke="white"/>
                <circle stroke-width="0.2" fill="white" r="6" cx="10" cy="0" stroke="white"/>
                
                <ellipse rx="0.5" ry="1.5" transform="translate(1.5 9) rotate(60 0 0)" stroke-width="0.2" stroke="#7596c5" fill="#042373"/>
                <ellipse rx="0.5" ry="1.5" transform="translate(9 1.5) rotate(30 0 0)" stroke-width="0.2"  stroke="#7596c5" fill="#042373"/>
              </g>

              <g id="big" fill="#7596c2" stroke="#042373">
                <ellipse rx="0.8" ry="3" transform="translate(3 0) rotate(90 0 0)" stroke-width="0.2" />
                <ellipse rx="0.8" ry="3" transform="translate(2.6 1.6) rotate(118 0 0)" stroke-width="0.2"/>
                <ellipse rx="0.8" ry="3" transform="translate(1.6 2.7) rotate(152 0 0)" stroke-width="0.2"/>
                <ellipse rx="0.8" ry="3" transform="translate(0 3) rotate(180 0 0)" stroke-width="0.2"/>
                <circle fill="white" r="1" stroke-width="0.2"/>
                <circle stroke="#294391" stroke-width="0.2" fill="transparent" r="8"/>
              </g>
              
            </symbol>
          </def>
      `;
    let tiles = '';
    for (let j = 0; j < maxHeight; j++) {
      for (let i = 0; i < maxWidth; i++) {
        let angel = '';

        if (j % 2) {
          angel =  i % 2 ? 180 : 270;
        } else {
          angel =  i % 2 ? 90 : 0;
        }

        const transform = `transform="
              translate(${(2.5 + size) * i} ${(2.5 + size) * j}) 
              rotate(${angel} ${size/2} ${size/2})
              "`;

        tiles = tiles + `<use xlink:href="#tile" width=${size} height=${size} ${transform}/>`
      }
    }

    svg.innerHTML = `${background} ${defs} ${tiles}`;

  }
}

export default Artwork;
