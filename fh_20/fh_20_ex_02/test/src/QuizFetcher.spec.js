const assert = require('power-assert');
const QuizFetcher = require('../../src/QuizFetcher');


describe('QuizFetcherのクラス', () => {
  describe('fetchメソッドの挙動の確認', () => {
    it('fetchメソッドという名前のメソッドを持つ', () => {
      assert.strictEqual(typeof QuizFetcher.fetch, 'function')
    });
    it('[async/await版]fetchメソッドの戻り値の型チェック', async () => {
     const data =  await QuizFetcher.fetch();
     assert.strictEqual(data.results.length, 10);
     data.results.forEach((quiz) => {
       
       assert.strictEqual(typeof quiz.category, 'string');
       assert.strictEqual(typeof quiz.type, 'string');
       assert.strictEqual(typeof quiz.difficulty, 'string');
       assert.strictEqual(typeof quiz.question, 'string');
       assert.strictEqual(typeof quiz.correct_answer, 'string');
       assert.strictEqual(Array.isArray(quiz.incorrect_answers), true);
       quiz.incorrect_answers.forEach((answer => {
         assert.strictEqual(typeof answer, 'string');
       }))
     });
    });
    it('[Promise版]fetchメソッドの戻り値の型チェック', () => {
      return QuizFetcher.fetch().then((data) => {
        // thenでresolve
        const results = data.results;
        results.forEach((quiz) => {
          assert.strictEqual(typeof quiz.category, 'string');
          assert.strictEqual(typeof quiz.type, 'string');
          assert.strictEqual(typeof quiz.difficulty, 'string');
          assert.strictEqual(typeof quiz.question, 'string');
          assert.strictEqual(typeof quiz.correct_answer, 'string');
          assert.strictEqual(Array.isArray(quiz.incorrect_answers), true);
          quiz.incorrect_answers.forEach((answer => {
            assert.strictEqual(typeof answer, 'string');
          }))
        });
      })
    })
    it('[コールバック版]fetchメソッドの戻り値の型チェック', (done) => {
     QuizFetcher.fetch().then((data) => {
       data.results.forEach((quiz) => {
        assert.strictEqual(typeof quiz.category, 'string');
        assert.strictEqual(typeof quiz.type, 'string');
        assert.strictEqual(typeof quiz.difficulty, 'string');
        assert.strictEqual(typeof quiz.question, 'string');
        assert.strictEqual(typeof quiz.correct_answer, 'string');
        assert.strictEqual(Array.isArray(quiz.incorrect_answers), true);
        quiz.incorrect_answers.forEach((answer => {
          assert.strictEqual(typeof answer, 'string');
        }))
       })
       done();
     }).catch((error) => {
       done(error);
     })
    })
  })
})
