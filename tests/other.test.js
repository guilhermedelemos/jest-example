describe('other examples', () => {
  
  test.skip('skip', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('fail', () => {
    expect(true).toBe(false);
  });

  test('random failure', () => {
    const min = 1;
    const max = 2;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    expect(randomInt).toBe(1);
  });

});