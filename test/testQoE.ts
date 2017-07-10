import { expect } from 'chai';
import {QoE} from '../src/app/classes/qoe';
import {} from 'jasmine';

/* Constructor test */
describe('QoE.ts constructor', () => {
  it('object should be created', () => {
    const qoe = new QoE(15);
  });
});
