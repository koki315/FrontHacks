const assert = require('power-assert');
const Counter = require('../../src/Counter');

describe('src/Counter.jsのテスト', () => {
  it('_countプロパティを持つ', () => {
    const counter1 = new Counter();
    assert.ok(counter1.hasOwnProperty('_count'), true)
  });
  it('_countプロパティの初期値は0である。', () => {
    const counter1 = new Counter();
    assert.strictEqual(counter1._count, 0)
  });
  it('incrementメソッドを持つ。', () => {
    const counter1 = new Counter();
    assert.ok(typeof counter1.increment, 'function')
  });
  it('incrementメソッド実行すると_countプロパティの値は1増える', () => {
    const counter1 = new Counter();
    assert.strictEqual(counter1.increment(), counter1._count++);
  });
  it('decrementメソッドを持つ', () => {
    const counter1 = new Counter();
    assert.ok('decrement' in counter1, true);
  });
  it('decrementメソッドを実行すると_countプロパティの値は1減る', () => {
    const counter1 = new Counter();
    assert.strictEqual(counter1.decrement(), counter1._count--);
  });
})