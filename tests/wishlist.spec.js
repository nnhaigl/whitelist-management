const app = require('../server'); // Link to your server file
require('dotenv').config();
const supertest = require('supertest');
const request = supertest(app);
const { v4: uuidv4 } = require('uuid');
const connection = require('../src/database/connection');
const { knex } = require('../src/database/connection');

describe('Wishlist', () => {
  let token = '';
  let token2 = '';
  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    await connection.knex.migrate.latest();
    await connection.knex.seed.run();
    const res = await request
      .post('/user/login')
      .send({ email: 'nnhaigl@gmail.com', password: '123456' })
      .set('Accept', 'application/json');
    token = res.body.access_token;

    const res1 = await request
      .post('/user/login')
      .send({ email: 'test100@gmail.com', password: '123456' })
      .set('Accept', 'application/json');
    token2 = res1.body.access_token;
  });
  describe('insert wishlist', () => {
    it('it should return 401 if missing authorization token', async (done) => {
      const title = 'test' + uuidv4();
      const res = await request
        .post('/wishlist')
        .send({ title })
        .set('Accept', 'application/json');
      expect(res.status).toBe(401);
      done();
    });
    it('it should return 400 if missing title in body', async (done) => {
      const title = 'test' + uuidv4();
      const res = await request
        .post('/wishlist')
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json');
      expect(res.status).toBe(400);
      done();
    });
    it('it should return 400 if missing title in body', async (done) => {
      const title = 'test' + uuidv4();
      const res = await request
        .post('/wishlist')
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json');
      expect(res.status).toBe(400);
      done();
    });
    it('it should return 200 if insert wishlist success', async (done) => {
      const title = 'test' + uuidv4();
      const res = await request
        .post('/wishlist')
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(200);
      const id = res.body.id;
      const wishlist = await knex('wishlist').where('uuid', id).select('*');
      expect(wishlist.length).toBe(1);
      done();
    });
  });
  describe('update wishlist', () => {
    it('it should return 401 if missing authorization token', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .put('/wishlist/' + wishlistItem.uuid)
        .send({ title })
        .set('Accept', 'application/json');
      expect(res.status).toBe(401);
      done();
    });
    it('it should return 400 if missing title', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .put('/wishlist/' + wishlistItem.uuid)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json');
      expect(res.status).toBe(400);
      done();
    });

    it('it should return 404 if wishlist not found', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .put('/wishlist/' + 846431313131313131)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(404);
      done();
    });

    it('it should return 403 if wishlist is not own by user', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .put('/wishlist/' + wishlistItem.uuid)
        .set('Authorization', 'Bearer ' + token2)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(403);
      done();
    });

    it('it should return 200 if update wishlist success', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      let wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .put('/wishlist/' + wishlistItem.uuid)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(200);
      wishlist = await knex('wishlist')
        .where('uuid', wishlistItem.uuid)
        .select('*');
      expect(wishlist[0].title).toBe(title);
      done();
    });
  });

  describe('get wishlist', () => {
    it('it should return 401 if missing authorization token', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .get('/wishlist')
        .send({ title })
        .set('Accept', 'application/json');
      expect(res.status).toBe(401);
      done();
    });
    it('it should return 200 if success', async (done) => {
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      let wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const res = await request
        .get('/wishlist?offset=10&limit=10')
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json');
      expect(res.status).toBe(200);
      expect(res.body.total).toBe(wishlist.length);
      done();
    });
  });

  describe('add wishlist item', () => {
    it('it should return 401 if missing authorization token', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .post(`/wishlist/${wishlistItem.uuid}/items`)
        .set('Accept', 'application/json');
      expect(res.status).toBe(401);
      done();
    });

    it('it should return 403 if wishlist is not own by user', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .post(`/wishlist/${wishlistItem.uuid}/items`)
        .set('Authorization', 'Bearer ' + token2)
        .set('Accept', 'application/json');
      expect(res.status).toBe(403);
      done();
    });

    it('it should return 404 if wishlist not found', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .post(`/wishlist/46465465465/items`)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(404);
      done();
    });
    it('it should return 200 if insert success', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const res = await request
        .post(`/wishlist/${wishlistItem.uuid}/items`)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send([{ title }]);
      expect(res.status).toBe(200);
      done();
    });
  });

  describe('update wishlist item', () => {
    it('it should return 401 if missing authorization token', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const wishlistItems = await knex('wishlist_item')
        .where('wishlist_id', wishlistItem.id)
        .select('*');
      const res = await request
        .put(`/wishlist/${wishlistItem.uuid}/items/${wishlistItems[0].id}`)
        .set('Accept', 'application/json');
      expect(res.status).toBe(401);
      done();
    });

    it('it should return 403 if wishlist is not own by user', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const wishlistItems = await knex('wishlist_item')
        .where('wishlist_id', wishlistItem.id)
        .select('*');
      const res = await request
        .put(`/wishlist/${wishlistItem.uuid}/items/${wishlistItems[0].id}`)
        .set('Authorization', 'Bearer ' + token2)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(403);
      done();
    });

    it('it should return 404 if wishlist not found', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const wishlistItems = await knex('wishlist_item')
        .where('wishlist_id', wishlistItem.id)
        .select('*');
      const res = await request
        .put(`/wishlist/46465465465/items/4342343`)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(404);
      done();
    });

    it('it should return 404 if wishlist itemn not found', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const wishlistItems = await knex('wishlist_item')
        .where('wishlist_id', wishlistItem.id)
        .select('*');
      const res = await request
        .put(`/wishlist/${wishlistItem.uuid}/items/4342343`)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(404);
      done();
    });

    it('it should return 400 if missing title', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const wishlistItems = await knex('wishlist_item')
        .where('wishlist_id', wishlistItem.id)
        .select('*');
      const res = await request
        .put(`/wishlist/${wishlistItem.uuid}/items/4342343`)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json');
      expect(res.status).toBe(400);
      done();
    });
    it('it should return 200 if update success', async (done) => {
      const title = 'test' + uuidv4();
      const user = await knex('users')
        .where('email', 'nnhaigl@gmail.com')
        .select('id');
      const wishlist = await knex('wishlist')
        .where('user_id', user[0].id)
        .select('*');
      const wishlistItem = wishlist[0];
      const wishlistItems = await knex('wishlist_item')
        .where('wishlist_id', wishlistItem.id)
        .select('*');
      const res = await request
        .put(`/wishlist/${wishlistItem.uuid}/items/${wishlistItems[0].id}`)
        .set('Authorization', 'Bearer ' + token)
        .set('Accept', 'application/json')
        .send({ title });
      expect(res.status).toBe(200);
      const afterupdateItem = await knex('wishlist_item')
        .where('id', wishlistItems[0].id)
        .select('*');
      expect(afterupdateItem[0].title).toBe(title);
      done();
    });
  });
});
