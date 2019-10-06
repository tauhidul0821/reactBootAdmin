const users = require('../api/routes/users');

describe('users', () => {
  it('something', () => {
    const result = users.something(-1);
    expect(result).toBe(1);
  });
});
