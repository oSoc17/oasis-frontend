import { expect } from 'chai';
import { QoE } from '../src/app/classes/qoe';

/* Constructor test */
describe('QoE.ts constructor', () => {
  it('object should be created', () => {
    const qoe = new QoE(15);
  });
});
