/*
  FIXME: This file is written in CommonJS format.
  But we will use ESModules in our project.
*/

/*
  Implemented with reference to:
  - https://jestjs.io/ja/docs/mock-functions
  - https://jestjs.io/ja/docs/expect#tocontainitem
*/

const fsExtra = require("fs-extra");

const { PathNotExistsError, PathIsDirError } = require("./pathAccessErrors");
const copySourceDir = require("./copySourceDir");

jest.mock("fs-extra");
beforeEach(() => {
  fsExtra.statSync.mockReset();
  fsExtra.copySync.mockReset();
});

describe("When srcDir directory not exists", () => {
  it("should throw PathNotExistsError", () => {
    fsExtra.statSync.mockReturnValue(undefined);
    expect(() => copySourceDir("src", "dist")).toThrow(PathNotExistsError);
  });
});

describe("When the srcDir is a not directory but file", () => {
  it("should throw PathIsDirError", () => {
    fsExtra.statSync.mockReturnValue({
      isDirectory: () => false
    });
    expect(() => copySourceDir("src", "dist")).toThrow(PathIsDirError);
  });
});

describe("When srcDir directory exists", () => {
  it("should copy contents in srcDir directory to distDir directory", () => {
    fsExtra.statSync.mockReturnValue({
      isDirectory: () => true
    });

    expect(() => copySourceDir("src", "dist")).not.toThrow();

    const calls = fsExtra.copySync.mock.calls;
    expect(calls.length).toBe(1);

    expect(calls[0]).toContain("src");
    expect(calls[0]).toContain("dist");
  });
});