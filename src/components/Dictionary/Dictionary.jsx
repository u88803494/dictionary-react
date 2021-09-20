// region 1. Platform Libraries
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// end-region

// region 2. Project Libraries
import DictionaryRender from './DictionaryRender';
// end-region

const Dictionary = ({ word }) => {
  const [details, setDetails] = useState([]);
  useEffect(async () => {
    try {
      if (word) {
        const { data } = await axios.get(`https://www.moedict.tw/raw/${word}`);
        const wordDetails = data.heteronyms.map((wordDetail) => {
          const pinyin = wordDetail.pinyin.split(' ');
          const definitionTypes = [...new Set(wordDetail.definitions.map((def) => def.type))];
          const definitions = definitionTypes.map((type) => ([
            wordDetail.definitions.filter((def) => def.type === type),
          ]));
          return ({
            pronunciations: wordDetail.bopomofo.split(' ').map((pronunciation, i) => ({
              pronunciation1: pronunciation,
              pronunciation2: pinyin[i],
              word: word[i],
            })),
            definitions,
          });
        });
        setDetails(wordDetails);
      }
      if (!word) {
        setDetails([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [word]);
  return (
    <DictionaryRender
      details={details}
    />
  );
};

Dictionary.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Dictionary;
