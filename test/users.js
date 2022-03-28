import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public/v2/');

import { expect } from 'chai';

//const TOKEN = process.env.USER_TOKEN;
 const TOKEN = "5da40bad8ce2d004d2e05c6e8f6069ecd9740de18599135ec54398e854966170"


describe('Users', () => {
  it('GET /users', () => {
    // request.get(`users?access-token=${TOKEN}`).end((err, res) => {
    //   expect(res.body.data).to.not.be.empty;
    //   done();
    // });

    return request.get(`users?access-token=${TOKEN}`).then((res) => {
      expect(res.body.data).to.not.be.null;
    });
  });

  it('GET / user / id', () =>{
    return request.get(`users/3940?access-token=${TOKEN}`).then((res)=>{
    console.log(res.body.id) 
    expect(res.body.id).to.be.eq(3940);
   
    });  
 });

 it('GET / user with query params', () =>{
  const url =`users?access-token=${TOKEN}&gender=male&status=inactive`
  return request.get(url).then((res)=>{
  const data = res.body
  data.forEach(element => {
      expect(element.gender).to.be.eq('male');
      //return request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data).then(res)
  }); 
  });  
}); 

it('POST / user', () =>{
  const data ={
      email : `test${Math.floor(Math.random() * 9999)}@mail.ca`,
      name: "lien",
      gender : "male",
      status : "active"
  };
 return request.post('users').set("Authorization",`Bearer ${TOKEN}`).send(data).then((res)=>{
 console.log(res.body) 
// expect(res.body.email).to.be.eq(data.email);
 expect(res.body).to.deep.include(data);   
 });  
});
it('PUT / user: id', () =>{
  const data ={
      name: `lien${Math.floor(Math.random() * 9999)}@mail.ca`,
      gender : "male",
      status : "inactive"
  };
 return request.put('users/4198').set("Authorization",`Bearer ${TOKEN}`).send(data).then((res)=>{
 console.log(res.body) 
// expect(res.body.email).to.be.eq(data.email);
 expect(res.body).to.deep.include(data);   
 });  
}); 
it('DELETE / user: id', () =>{
 return request.delete('users/4465').set("Authorization",`Bearer ${TOKEN}`).then((res)=>{
 console.log(res.body) 
  expect(res.body).to.be.empty
 });
});
});
