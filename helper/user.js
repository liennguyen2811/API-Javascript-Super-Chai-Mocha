import qa from '../config/qa';
require('dotenv').config({path:'.evn'});
const supertest = require('supertest');
const request = supertest(qa.baseUrl);
const faker = require('faker');

 const TOKEN = process.env.USER_TOKEN;
// console.log("lien check" + TOKEN);
//const TOKEN ='5da40bad8ce2d004d2e05c6e8f6069ecd9740de18599135ec54398e854966170'

export const createRandomUserWithFaker = async () => {
  const data = {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    status: 'Active',
    gender: 'Male',
  };

  const res = await request
    .post(`users`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(data);

console.log(res.body)
  return res.body.id;
};

export const createRandomUser = async () => {
  const data = {
    email: 'jmathews' + Math.floor(Math.random() * 99999) + '@mail.ca',
    name: 'John',
    status: 'Active',
    gender: 'Male',
  };
  const res = await request
    .post(`users`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(data);
    console.log(res.body.id)
  return res.body.id;
};
