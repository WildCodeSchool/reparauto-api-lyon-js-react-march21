const request = require('supertest');
const faker = require('faker');
const app = require('../app.js');
const User = require('../models/user.js');

const getValidAttributes = () => {
  return {
    email: faker.unique(faker.internet.email),
    password: faker.internet.password(),
  };
};

const createRecord = (attributes) =>
  User.create(attributes || getValidAttributes());

let res;
let payload;

describe(`users endpoints`, () => {
  describe(`POST /users`, () => {
    describe('when a valid payload is sent', () => {
      beforeAll(async () => {
        payload = getValidAttributes();
        res = await request(app).post(`/users`).send(payload);
      });

      it('returns 201 status', async () => {
        expect(res.statusCode).toEqual(201);
      });

      it('returns the id of the created user', async () => {
        expect(res.body).toHaveProperty('id');
      });

      it('returned object does not contain passwords', () => {
        expect(res.body.password).toBe(undefined);
        expect(res.body.hashedPassword).toBe(undefined);
      });
    });
    describe('when a user with the same email already exists in DB', () => {
      beforeAll(async () => {
        const validEntity = await createRecord();
        res = await request(app)
          .post(`/users`)
          .send({ ...getValidAttributes(), email: validEntity.email });
      });

      it('returns a 422 status', async () => {
        expect(res.status).toBe(422);
      });
    });

    describe('when email is not provided', () => {
      beforeAll(async () => {
        res = await request(app).post(`/users`).send({
          password: 'zfeyfgeyfgr',
        });
      });

      it('returns a 422 status', async () => {
        expect(res.status).toBe(422);
      });
    });

    describe('when password is not provided', () => {
      beforeAll(async () => {
        res = await request(app).post(`/users`).send({
          email: 'john.doe@gmail.com',
        });
      });

      it('returns a 422 status', async () => {
        expect(res.status).toBe(422);
      });
    });
  });
});
