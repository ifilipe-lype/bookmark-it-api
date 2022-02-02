import { shouldWork } from 'index-to-test';

describe('Test setup', () => {
  it('Should work!', () => {
    expect(shouldWork()).toBe('working...');
  });
});
