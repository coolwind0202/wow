/*
  Implemented with reference to:
  - https://nodejs.org/api/path.html#pathresolvepaths
*/

import { resolve } from "path";

const getTemplateDirPath = () => {
  return resolve(__dirname, "../cli/template");
};
// console.log(getTemplateDirPath());

export default getTemplateDirPath;