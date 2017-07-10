import { expect } from 'chai';
import {QoE} from "../src/app/classes/QoE";
import {} from 'jasmine';

/* Constructor test */
describe('QoE.ts constructor', () => {
  it('object should be created', () => {
    let qoe = new QoE(15);
  });
});
