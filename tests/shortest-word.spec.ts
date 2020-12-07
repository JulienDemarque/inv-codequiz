import { assert } from 'chai'
import { USER_FOLDER } from './config/env'
const answerImportPath = `../src/answers/${USER_FOLDER}`

import(answerImportPath).then(({ findShort }) => {
  describe('shortest word', function () {
    it('test', function () {
      assert.equal(findShort('bitcoin take over the world maybe who knows perhaps'), 3)
      assert.equal(
        findShort('turns out random test cases are easier than writing out basic ones'),
        3
      )
      assert.equal(findShort('lets talk about javascript the best language'), 3)
      assert.equal(findShort('i want to travel the world writing code one day'), 1)
      assert.equal(findShort('Lets all go on holiday somewhere very cold'), 2)
    })
  })
})
