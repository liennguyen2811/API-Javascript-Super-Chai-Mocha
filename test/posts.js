require('dotenv').config({path:'.evn'});
import { describe } from 'mocha';
import { expect } from 'chai'
import { createRandomUser } from '../helper/user';
import request from'../config/common'
import faker from 'faker';

const TOKEN = process.env.USER_TOKEN;


describe('POST', () =>{
    before(async () =>{
        userID = await createRandomUser();
      
    });
    let userID, postId;
    it('users', async() =>{
        const data ={
            email : `test${Math.floor(Math.random() * 9999)}@mail.ca`,
            name: "lien",
            gender : "male",
            status : "active"
        };
    
        const res = await request
        .post('users')
        .set("Authorization",`Bearer ${TOKEN}`)
        .send(data);
        userID = res.body.id
        console.log(userID) 
        expect(res.body).to.deep.include(data); 
    });
    it('user / id', async() =>{
        await request.get(`users/${userID}?access-token=${TOKEN}`).then((res)=>{
        console.log(res.body.id) 
        expect(res.body.id).to.be.eq(userID);
        expect(200)
        });  
    });
    it('/posts', async () => {
            const data = {
              user_id: userID,
              title: faker.lorem.sentence(),
              body: faker.lorem.sentence()
            };
      
            const res = await request
              .post('posts')
              .set('Authorization', `Bearer ${TOKEN}`)
              .send(data);
      
            console.log(res.body)
            expect(res.body).to.deep.include(data);
            postId = res.body.id;
            console.log(postId)
          }); 
    it('post / id', async() =>{
            await request.get(`posts/${postId}`)
            .set('Authorization', `Bearer ${TOKEN}`)
            expect(200)
            });  
           
});   

describe('Negative test', () =>{
    it('401 Authentication failed', async () => {
        const data = {
          user_id: 2,
          title: "my title",
          body: "my blog post"
        };
  
        const res = await request
          .post('posts')
          .send(data);
        console.log(res.body)
        expect(res.body.message).to.be.eq("Authentication failed");
      }); 
      it('422 Authentication failed', async () => {
        const data = {
          user_id: 2,
          title: "my title",
        };
  
        const res = await request
          .post('posts')
          .set('Authorization', `Bearer ${TOKEN}`)
          .send(data);
        console.log(res.body)
        expect(res.body[0].field).to.be.eq("body");
        expect(res.body[0].message).to.be.eq("can't be blank");
      }); 
}); 