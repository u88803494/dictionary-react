// region 1. Platform Libraries
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// end-region

// region 2. Project Libraries
import DictionaryRender from './DictionaryRender';
// end-region

const Dictionary = ({ word }) => {
  const [heteronyms, setHeteronyms] = useState([]);
  useEffect(async () => {
    try {
      if (word) {
        const { data } = await axios.get(`https://www.moedict.tw/raw/${word}`);
        const wordDetails = data.heteronyms.map((wordDetail) => {
          const pinyin = wordDetail.pinyin.split(' ');
          return ({
            pronunciations: wordDetail.bopomofo.split(' ').map((pronunciation, i) => ({
              pronunciation1: pronunciation,
              pronunciation2: pinyin[i],
              word: word[i],
            })),
            definitions: wordDetail.definitions,
          });
        });
        setHeteronyms(wordDetails);
      }
      if (!word) {
        setHeteronyms([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [word]);
  return (
    <DictionaryRender
      word={word}
      heteronyms={heteronyms}
    />
  );
};

Dictionary.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Dictionary;
