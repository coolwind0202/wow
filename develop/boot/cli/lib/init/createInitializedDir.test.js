const path = require("path");

const createInitializedDir = require("./createInitializedDir");
const copySourceDir = require("../../../util/copySourceDir");
const getTemplateDirPath = require("../../../util/getTemplateDirPath");

jest.mock("../../../util/copySourceDir");
beforeEach(() => {
  copySourceDir.mockReset();
});

describe("Not specified template directory", () => {
  it("should copy cli/template", () => {
    const dist = "/distdir";
    createInitializedDir(dist);
    const calls = copySourceDir.mock.calls;
    expect(calls.length).toBe(1);

    // src
    expect(calls[0][0]).toBe(getTemplateDirPath());

    // dist
    expect(calls[0][1]).toBe(dist);
  });
});

describe("Given template directory", () => {
  it("should copy cli/template", () => {
    const template = "/template";
    const dist = "/distdir";
    createInitializedDir(dist, { template });

    const calls = copySourceDir.mock.calls;
    expect(calls.length).toBe(1);

    // src
    expect(calls[0][0]).toBe(template);
  });
});