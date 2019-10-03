const request = require('./request');

describe('app', () => {
  it('should load without errors', async () => {
    expect.assertions(1);
    const response = await request.options('/');
    expect(response.status).toBe(204);
  });

  it('should allow cors', async () => {
    expect.assertions(1);
    const response = await request.options('/');
    expect(response.header['access-control-allow-origin']).toBe('*');
  });

  it('should return 404 if not found', async () => {
    expect.assertions(1);
    const response = await request.head(
      `/${Math.random()
        .toString()
        .substr(2)}`,
    );
    expect(response.status).toBe(404);
  });
});
