const assert = require("power-assert");
const math = require('../math');

describe ('math.jsのテスト', () => {
  describe('addメソッドのテスト', () => {
    it('[1, 2, 3]を引数に渡すと6が戻り値', () => {
      assert.equal(math.add([1, 2, 3]), 6)
    });
    it('[9, 8, 7, 10]を引数に渡すと34が戻り値', () => {
      assert.equal(math.add([9, 8, 7, 10]), 34)
    })
  });
});