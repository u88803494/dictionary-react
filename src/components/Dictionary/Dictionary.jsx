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
        const { data } = await axios.get(` https://www.moedict.tw/raw/${word}`);
        // setHeteronyms(data.heteronyms);
        const definitions = data.heteronyms.map((definition) => {
          const pronunciations2 = definition.bopomofo2.split(' ');
          return (definition.bopomofo.split(' ').map((pronunciation, i) => ({
            pronunciation1: pronunciation,
            pronunciation2: pronunciations2[i],
            word: word[i],
          })));
        });
        setHeteronyms(definitions);
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
