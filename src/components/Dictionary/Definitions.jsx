// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React from 'react';
// end-region

const Definitions = ({ typeDefinitions }) => (
  <div className="mb-4">
    <div className=" w-full mt-4">
      <header className="h-12 pl-16 pr-8 flex justify-between items-center bg-gray-600">
        <div className="flex">
          釋義
        </div>
      </header>
      <div className="definitions-content pt-6 px-16 pb-24 bg-gray-800">
        {typeDefinitions.map((definitions) => (
          <>
            <div className="py-1 font-black text-xl border-solid border-t-2 border-gray-600">
              {definitions[0].type ? `[${definitions[0].type}]` : ''}
            </div>
            <div className="mb-6 border-solid border-t-2 border-gray-600">
              {definitions.map(({ def, example, quote }, index) => (
                <div className="">
                  <div className="mt-2 mb-1 text-xl font-black">
                    {`${index + 1}. ${def}`}
                  </div>
                  <div>
                    {example && (example.map((ex) => (
                      <div>
                        {ex}
                      </div>
                    )))}
                  </div>
                  <div>
                    {quote && (quote.map((q) => (
                      <div>
                        {q}
                      </div>
                    )))}
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  </div>
);

Definitions.propTypes = {
  typeDefinitions: PropTypes.arrayOf(PropTypes.shape({
    def: PropTypes.string.isRequired,
    example: PropTypes.arrayOf(PropTypes.string),
    qoute: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
  })).isRequired,
};

export default Definitions;
