/*
  Implemented with reference to:
  - https://nodejs.org/api/path.html#pathresolvepaths
*/

import { resolve } from "path";
import __dirname from "./dirname.js";

const getTemplateDirPath = () => {
  return resolve(__dirname, "../cli/template");
};
// console.log(getTemplateDirPath());

export default getTemplateDirPath;