const template = `
           <def>
            <symbol id="tile" viewBox="0 0 10 10">
            
             <rect width="10" height="10" x="0" y="0" id="tile-base"/>
            
              <g id="small">
                <rect width="5" height="5" x="6" y="6" fill="transparent" />
                <ellipse rx="0.4" ry="1" transform="translate(9 9.9) rotate(90 0 0)"/>
                <ellipse rx="0.4" ry="1" transform="translate(9.2 9.2) rotate(135 0 0)"/>
                <ellipse rx="0.4" ry="1" transform="translate(9.9 9) rotate(0 0 0)"/>
              </g>
              
              <g id="middle" >
                <circle r="6" cx="0" cy="10" class="circle"/>
                <circle r="6" cx="10" cy="0" class="circle"/>
                <ellipse rx="0.5" ry="1.5" transform="translate(1.5 9) rotate(60 0 0)"/>
                <ellipse rx="0.5" ry="1.5" transform="translate(9 1.5) rotate(30 0 0)"/>
              </g>

              <g id="big">
                <ellipse rx="0.8" ry="3" transform="translate(3 0) rotate(90 0 0)"/>
                <ellipse rx="0.8" ry="3" transform="translate(2.6 1.6) rotate(118 0 0)"/>
                <ellipse rx="0.8" ry="3" transform="translate(1.6 2.7) rotate(152 0 0)"/>
                <ellipse rx="0.8" ry="3" transform="translate(0 3) rotate(180 0 0)"/>
                <circle r="1" class="circle"/>
                <circle r="8" fill="transparent" />
              </g>
              
            </symbol>
          </def>
      `;

export default template;