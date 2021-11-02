// region 1. Platform Libraries
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// end-region

// region 2. Project Libraries
import Dictionary from '../components/Dictionary';
import { getRawDefinitions } from '../webAPIs/dictionary';
// end-region

const DictionaryPage = ({ word }) => {
  const [details, setDetails] = useState([]);

  useEffect(async () => {
    try {
      if (word) {
        const { data } = await getRawDefinitions(word);
        const wordDetails = data.heteronyms.map((wordDetail) => {
          const pinyin = wordDetail.pinyin.split(' ');
          const definitionTypes = [...new Set(wordDetail.definitions.map((def) => def.type))];
          const typeDefinitions = definitionTypes.map((type) => ([
            ...wordDetail.definitions.filter((def) => def.type === type),
          ]));
          return ({
            pronunciations: wordDetail.bopomofo.split(' ').map((pronunciation, i) => ({
              pronunciation1: pronunciation,
              pronunciation2: pinyin[i],
              word: word[i],
            })),
            typeDefinitions,
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
    <Dictionary
      details={details}
    />
  );
};

DictionaryPage.propTypes = {
  word: PropTypes.string.isRequired,
};

export default DictionaryPage;
