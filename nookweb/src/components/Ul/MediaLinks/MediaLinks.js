import React from 'react';

import classes from'./MediaLinks.module.css';


function MediaLinks() {
    return (
        <div className={classes.MediaLinks}>
            <a
             href="https://www.facebook.com/NookDeco" 
             target="_blank"
             rel="noopener noreferrer"
             ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={classes.MediaLinks}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a 
            href="https://www.instagram.com/nook_deco_mariana_lacroze/" 
            target="_blank"
            rel="noopener noreferrer"
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={classes.MediaLinks}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>

        </div>
    )
}

export default MediaLinks
