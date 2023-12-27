/*
  This file is made for debugging implementation of resolving template directory.
*/

import path from "path";
import __dirname from "file_util/src/dirname.js";
console.log(path.resolve(__dirname, "../../template"));