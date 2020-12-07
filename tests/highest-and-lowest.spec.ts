import { USER_FOLDER } from './config/env'
const answerImportPath = `../src/answers/${USER_FOLDER}`

import { assert } from 'chai'

import(answerImportPath).then(({ highAndLow }) => {
  describe('highest and lowest', function () {
    it('test', function () {
      assert.strictEqual(highAndLow('4 5 29 54 4 0 -214 542 534 2000 -64 1 -3 6 -6'), '2000 -214')
    })
  })
})
