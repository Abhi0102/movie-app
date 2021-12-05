import React from "react";

class Navbar extends React.Component{

    render(){
        return (
            <nav className='navbar'>
                <div className='search-container'> 
                    <input placeholder='Search'/>&nbsp;
                    <button className='search-btn'>Search</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;