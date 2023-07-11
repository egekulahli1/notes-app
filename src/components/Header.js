import React from "react";
import { MdIconName } from 'react-icons/md';

const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="header">
           <h1>Notes</h1>
           <button 
           className="save"
              onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode) }
           >
            Toggle Mode
            </button>
        </div>
    );
}

export default Header;