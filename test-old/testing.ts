import { expect } from 'chai';
import {Connection} from '../src/app/classes/connection';
/*---------------------------------------------------------------------------------------------------------------------------------------
Conventions for writing tests:
- the name of the file where the piece of code that is being tested should be mentioned in the name of the test
- describe scenario above test
- tests should be devided into 3 distinct sections: setup, execution and assertion
----------------------------------------------------------------------------------------------------------------------------------------*/

/* Example test */
describe('1+1 test', () => {
  it('should return 2', () => {
    const result = 1 + 1;
    expect(result).to.equal(2);
  });
});
