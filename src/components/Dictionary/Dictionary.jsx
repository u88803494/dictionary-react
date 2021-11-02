// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React from 'react';
// end-region

// region 2. Project Libraries
import Definitions from './Definitions';
// end-region

const Dictionary = ({ details }) => (
  <div className="flex min-h-screen items-center flex-col justify-between">
    <div className="w-2/3 min-h-full mt-8 flex flex-col">
      {details.map((heteronym) => (
        <div className="mb-4">
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
          <Definitions typeDefinitions={heteronym.typeDefinitions} />
        </div>
      ))}
    </div>
    <footer className="h-14 w-full bg-black" />
  </div>
);

Dictionary.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    pronunciations: PropTypes.arrayOf(PropTypes.shape({
      pronunciation1: PropTypes.string.isRequired,
      pronunciation2: PropTypes.string.isRequired,
      word: PropTypes.string.isRequired,
    })),
    typeDefinitions: PropTypes.arrayOf(PropTypes.shape({
      def: PropTypes.string.isRequired,
      example: PropTypes.arrayOf(PropTypes.string),
      qoute: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
    })),
  })).isRequired,
};

export default Dictionary;
