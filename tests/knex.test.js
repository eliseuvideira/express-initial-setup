const knex = require('../utils/knex');

describe('knex', () => {
  it('should not throw errors', async () => {
    expect.assertions(1);
    const result = await knex.select(knex.raw("'knex' AS value")).first();
    expect(result).toStrictEqual({ value: 'knex' });
  });
});
