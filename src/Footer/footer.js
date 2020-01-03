import React from 'react';

import './footer.scss'

function Footer() {
     return (
        <div className = "footer">
           <h5>CONTACT ME</h5>
           <ul>
                   <li><i class="fa fa-home"></i>San Diego, Caifornia</li>
                   <li><i class="fa fa-phone"></i>337-718-2855</li>
                   <li><i class="fa fa-envelope"></i>lily@gmail.com</li>
                   <li><a href = "#" target = "blank">
                        <i className="fa fa-linkedin-square"></i>LinkedIn
                     </a>
                   </li>
                   <li><a href = "https://github.com/shanreed" target = "blank">
                        <i class="fa fa-github"></i>Instagram</a>
                   </li>
                   <li><a href = "#" target = "blank">
                        <i class="fa fa-twitter"></i>Twitter</a>
                   </li>
               </ul>
            <div className = "lily-footer">
               <h1>Lily</h1>
               <h1>Lily</h1>
               <h1>Lily</h1>
               <h1>Lily</h1>
               <h1>Lily</h1>
               <h1>Lily</h1>
            </div>
            <div className = "shannon-footer">
                  <div className = "copyright">Copyright © 2020 Shannon Reed </div>
                  <div className = "shannon-icons">
                     <i className="fa fa-linkedin-square"></i>
                     <i class="fa fa-twitter"></i>
                     <i class="fa fa-envelope"></i>
                  </div>
            </div>
        </div>
     )
  }
export default Footer;