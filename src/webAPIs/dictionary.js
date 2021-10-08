import axios from 'axios';

/** 萌點 API 文件請參考：
 * https://bre.is/EAMM7Qc6
 */

const DICTIONARY_API_URL = 'https://www.moedict.tw';
const RAW_DICTIONARY_PATH = `${DICTIONARY_API_URL}/raw/`;
const DIFFERENCE_SIMPLE_AND_TRADITION_DICTIONARY_PATH = `${DICTIONARY_API_URL}/c/`;

const getRawDefinitions = (word) => axios.get(`${RAW_DICTIONARY_PATH}${word}`);

const getDifferenceSimpleAndTraditionDefinitions = (word) => axios.get(`${DIFFERENCE_SIMPLE_AND_TRADITION_DICTIONARY_PATH}${word}.json`);

export { getRawDefinitions, getDifferenceSimpleAndTraditionDefinitions };
