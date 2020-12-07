import { USER_FOLDER } from './config/env'
const answerImportPath = `../src/answers/${USER_FOLDER}`

import { assert } from 'chai'

import(answerImportPath).then(({ getCount }) => {
  describe('vowel count', function () {
    it('test', function () {
      assert.strictEqual(getCount('abracadabra'), 5)
    })
  })
})
