import React from 'react';
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
        <div>
             &copy; {new Date().getFullYear} Dany Pham
        </div>
        <div>
            Powered by Edamam API
        </div>
    </div>
  )
}

export default Footer;