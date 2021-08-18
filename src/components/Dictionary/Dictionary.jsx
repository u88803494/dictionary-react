// region 1. Platform Libraries
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
// end-region

const Dictionary = ({ word }) => {
  useEffect(() => {
    axios.get(` https://www.moedict.tw/raw/${word}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [word]);
  return (
    <div className="flex justify-center">
      <div className="h-96 w-2/3 flex flex-col">
        <div>字義</div>
        <div>解釋</div>
      </div>
    </div>
  );
};

Dictionary.propTypes = {
  word: PropTypes.string.isRequired,
};

export default Dictionary;
