/*
  This classes are implemented with reference to:
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types
*/

class PathIsDirError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class PathNotExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

module.exports = {
  PathIsDirError,
  PathNotExistsError
};