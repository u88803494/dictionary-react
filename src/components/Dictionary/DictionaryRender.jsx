// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React from 'react';
// end-region

const DictionaryRender = ({ details }) => (
  <div className="flex justify-center">
    <div className="h-96 w-2/3 mt-8 flex flex-col">
      {details.map((heteronym) => (
        <>
          <div className="flex">
            {heteronym.pronunciations.map(({ pronunciation1, pronunciation2, word }) => (
              <div className="flex mr-8">
                <div className="w-20 mr-2 bg-white text-black text-center text-7xl">
                  {word}
                </div>
                <div>
                  <div className="text-4xl">
                    {pronunciation1}
                  </div>
                  <div className="pl-2 text-4xl">
                    {pronunciation2}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="definitions">
            解釋
          </div>
        </>
      ))}
    </div>
  </div>
);

DictionaryRender.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
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
