import { ValidNumberPipe } from './valid-number.pipe';

describe('ValidNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
