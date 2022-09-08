import React from "react";

function NavList({isVisible,setIsVisible}) {
    let visibility = isVisible ? 'show': 'hide';

  return (
    <>
      <nav className={visibility} >
        <button className="close" onClick={()=>setIsVisible(false)}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Collections
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Men
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Women
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={`nav-overlay ${visibility} `}></div>
    </>
  );
}

export default NavList;
