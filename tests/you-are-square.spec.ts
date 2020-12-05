import { expect } from 'chai'
import { USER_FOLDER } from './config/env'
const answerImportPath = `../src/answers/${USER_FOLDER}`

import(answerImportPath).then(({ isSquare }) => {
  describe('you-are-square', function () {
    it('test', function () {
      expect(isSquare(-1)).to.be.false
      expect(isSquare(0)).to.be.true
      expect(isSquare(3)).to.be.false
      expect(isSquare(4)).to.be.true
      expect(isSquare(25)).to.be.true
      expect(isSquare(26)).to.be.false
    })
  })
})
