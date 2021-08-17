// region 1. Platform Libraries
import React from 'react';
// end-region

// region U. UI Markups
import images from '../../assets/images';
// end-region

const Navbar = () => (
  <nav className="h-20 flex justify-center bg-indigo-400">
    <div className="dictionary-container h-full w-2/3 flex items-center justify-between flex-warp">
      <div className="title text-3xl font-semibold text-white">新典</div>
      <div className="search flex">
        <input
          type=""
          className="search__bar h-10 w-36 px-4 rounded-3xl outline-none"
          placeholder="查詢字義"
        />
        <div className="search__button ml-2 flex items-center">
          <img src={images.search} alt="" />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
