// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React from 'react';
// end-region

const DictionaryRender = ({ heteronyms }) => (
  <div className="flex justify-center">
    <div className="h-96 w-2/3 mt-8 flex flex-col">
      <div className="heteronyms flex">
        {heteronyms.map((heteronym) => (
          <>
            {heteronym.pronunciations.map(({ pronunciation1, pronunciation2, word }) => (
              <div className="heteronym flex mr-8">
                <div className="word mr-2 bg-white text-black text-7xl">
                  {word}
                </div>
                <div className="pronunciations-container">
                  <div className="bopomofo text-4xl">
                    {pronunciation1}
                  </div>
                  <div className="romanization pl-2 text-4xl">
                    {pronunciation2}
                  </div>
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
      <div>解釋</div>
    </div>
  </div>
);

DictionaryRender.propTypes = {
  heteronyms: PropTypes.arrayOf(PropTypes.shape({
    definitions: PropTypes.arrayOf(PropTypes.shape({
      def: PropTypes.string.isRequired,
      example: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
      qoute: PropTypes.arrayOf(PropTypes.string),
    })),
    pronunciations: PropTypes.arrayOf(PropTypes.shape({
      pronunciation1: PropTypes.string.isRequired,
      pronunciation2: PropTypes.string.isRequired,
      word: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default DictionaryRender;
