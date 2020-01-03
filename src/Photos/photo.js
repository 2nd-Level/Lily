import React from 'react';

import './photos.scss'

import lily01 from '../assets/lily01.jpg'
import lily02 from '../assets/lily02.jpg'
import lily03 from '../assets/lily03.jpg'
import lily04 from '../assets/lily04.jpg'
import lily05 from '../assets/lily05.jpg'
import lily06 from '../assets/lily06.jpg'
import lily07 from '../assets/lily07.jpg'
import lily08 from '../assets/lily08.jpg'

function Photos() {
     return (


      <div id = 'Photos' className="wrapper">

  <div className="item">
    <div className="polaroid"><img src={lily01}/>
      <div className="caption">Lily</div>
    </div>
  </div>

  <div className="item">
    <div className="polaroid"><img src={lily02}/>
      <div className="caption">Lily</div>
    </div>
  </div>

  <div className="item">
    <div className="polaroid"><img src={lily03}/>
      <div className="caption">Lily</div>
    </div>
  </div>

  <div className="item">
    <div className="polaroid"><img src={lily04}/>
      <div className="caption">Lily</div>
    </div>
  </div>
  
  <div className="item">
    <div className="polaroid"><img src={lily05}/>
      <div className="caption">Lily</div>
    </div>
  </div>
  <div className="item">
    <div className="polaroid"><img src={lily06}/>
      <div className="caption">Lily</div>
    </div>
  </div>
  <div className="item">
    <div className="polaroid"><img src={lily07}/>
      <div className="caption">Lily</div>
    </div>
  </div>
  <div className="item">
    <div className="polaroid"><img src={lily08}/>
      <div className="caption">Lily</div>
    </div>
  </div>

</div>
     
     )
  }
export default Photos;