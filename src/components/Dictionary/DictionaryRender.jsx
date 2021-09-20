// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React from 'react';
// end-region

const DictionaryRender = ({ details }) => (
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
          <div className="definitions w-full mt-4">
            <header className="h-12 pl-16 pr-8 flex justify-between items-center bg-gray-600">
              <div className="flex">
                釋義
              </div>
              <div className="toggle">
                圖
              </div>
            </header>
            <div className="definitions-content pt-4 px-16 pb-24 bg-gray-800">
              {console.log(heteronym.definitions)}
              <div className="border-solid border-t-2 border-gray-600">
                [副]
              </div>
              <div className="border-solid border-t-2 border-gray-600">
                解釋內容
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <footer className="h-14 w-full bg-black" />
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
