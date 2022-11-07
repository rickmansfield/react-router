import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='ui raised very padded segment'>
        <a href='https://github.com/OakAcademy/React-Redux' className='ui teal inverted segment'>Gloria</a>
        <div className='ui right floated header'>
          <button className='ui button'><Link to='/'>Home</Link></button>
          <button className='ui button'><NavLink to='/about'>About</NavLink></button>
          <button className='ui button'><NavLink to='/products'>Productss</NavLink></button>
        </div>
      </nav>
      </div>
  )
}

export default Navbar

// notice that Link prevents a server side request. NavLink is used to style the active link. i. e. if you inspect the About link, you will see that it has a class of active. This is because the url is /about. If you change the url to /products, the products link will have a class of active. This is because the url is /products. If you change the url to /, the Home link will have a class of active. This is because the url is /. When you want to have styling unique to the "active" button then NavLink makes it possible. If you want to have the same styling for all buttons, then Link is fine. 