import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Social() {
   return (
      <div className="social">
         <a href="https://codepen.io/naafi" target="_blank" rel="noopener noreferrer"><i><GitHubIcon /></i></a>

         <a href="https://codepen.io/naafi" target="_blank" rel="noopener noreferrer"><i > <LinkedInIcon /></i></a>
      </div>
   );

}

export default Social;
