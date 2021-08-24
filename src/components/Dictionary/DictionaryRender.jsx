/* eslint-disable react/prop-types */
// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React from 'react';
// end-region

const DictionaryRender = ({ word, heteronyms }) => (
  <div className="flex justify-center">
    <div className="h-96 w-2/3 mt-8 flex flex-col">
      <div className="heteronyms">
        {heteronyms.map((heteronym) => (
          <div className="flex">
            <div className="word bg-white text-black text-7xl">
              {word}
            </div>
            <div className="pronunciation-container">
              <div className="bopomofo text-4xl">
                {heteronym.bopomofo}
              </div>
              <div className="romanization text-4xl">
                {heteronym.bopomofo2}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>解釋</div>
    </div>
  </div>
);

DictionaryRender.propTypes = {
  word: PropTypes.string.isRequired,
};

export default DictionaryRender;
