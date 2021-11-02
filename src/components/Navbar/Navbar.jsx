// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React from 'react';
// end-region

// region U. UI Markups
import images from '../../assets/images';
// end-region

const Navbar = ({ setWord }) => {
  const handleChangeWord = (e) => {
    setWord(e.target.value);
  };

  return (
    <nav className="flex justify-center bg-indigo-400">
      <div className="h-20 w-2/3 flex items-center justify-between flex-warp">
        <div className="text-3xl font-semibold">新典</div>
        <div className="flex">
          <input
            className="h-10 w-36 px-4 rounded-3xl focus-visible: outline-none text-black"
            name="word"
            onChange={handleChangeWord}
            placeholder="查詢字義"
            type=""
          />
          <div className="ml-2 flex items-center">
            <img src={images.search} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setWord: PropTypes.func.isRequired,
};

export default Navbar;
