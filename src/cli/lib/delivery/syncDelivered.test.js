const { PathNotExistsError, PathIsDirError } = require("./pathAccessErrors");
const syncDelivered = require("./syncDelivered");
const fsExtra = require("fs-extra");

jest.mock("fs-extra");
beforeEach(() => {
  fsExtra.statSync.mockReset();
  fsExtra.copySync.mockReset();
});

/* テスト対象フォルダが存在しない場合のテスト */
describe("When local directory not exists", () => {
  it("should throw PathNotExistsError", () => {
    fsExtra.statSync.mockReturnValue(undefined);
    // existsが必ずfalseを返すようmockする
    expect(syncDelivered).toThrow(PathNotExistsError);
  });
});

describe("When the local is a not directory but file", () => {
  it("should throw PathIsDirError", () => {
    fsExtra.statSync.mockReturnValue({
      isDirectory: () => false
    });
    expect(syncDelivered).toThrow(PathIsDirError);
  });
});

/* テスト対象フォルダが存在する場合のテスト */
describe("When local directory exists", () => {
  it("should copy local directory contents to delivery directory", () => {
    fsExtra.statSync.mockReturnValue({
      isDirectory: () => true
    });

    // copyをmockし、呼び出しをjestの形式で認識できるようにする
    expect(syncDelivered).not.toThrow();

    const calls = fsExtra.copySync.mock.calls;
    expect(calls.length).toBe(1);

    expect(calls[0]).toContain("local");
    expect(calls[0]).toContain("delivered");
  });
});