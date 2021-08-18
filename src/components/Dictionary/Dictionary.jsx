// region 1. Platform Libraries
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// end-region

const Dictionary = ({ word }) => {
  const [heteronyms, setHeteronyms] = useState([]);
  useEffect(() => {
    if (word) {
      axios.get(` https://www.moedict.tw/raw/${word}`)
        .then((res) => setHeteronyms(res.data.heteronyms))
        .catch((err) => console.log(err));
    }
    if (!word) {
      setHeteronyms([]);
    }
  }, [word]);
  return (
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
                  {`注：${heteronym.bopomofo}`}
                </div>
                <div className="romanization text-4xl">
                  {`拼：${heteronym.bopomofo2}`}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>解釋</div>
      </div>
    </div>
  );
};

Dictionary.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Dictionary;
