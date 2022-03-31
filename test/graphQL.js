import supertest from 'supertest';
const request = supertest('https://hasura.io/learn/graphql');
import { expect } from 'chai';

//const TOKEN = process.env.USER_TOKEN;
 const TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDYyMzNmZDlmMDk1NDBiMDA2ODY0N2Q0OCJ9LCJuaWNrbmFtZSI6ImxpZW5uZ3V5ZW4yODExIiwibmFtZSI6ImxpZW5uZ3V5ZW4yODExQGdtYWlsLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yMmI3YTQ5ZjIwM2Y4Y2U4M2I1YjE2NGY4ZmMyMzBjYj9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRmxpLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDIyLTAzLTMxVDAxOjQzOjIwLjc5N1oiLCJpc3MiOiJodHRwczovL2dyYXBocWwtdHV0b3JpYWxzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MjMzZmQ5ZjA5NTQwYjAwNjg2NDdkNDgiLCJhdWQiOiJQMzhxbkZvMWxGQVFKcnprdW4tLXdFenFsalZOR2NXVyIsImlhdCI6MTY0ODY5MTAwMywiZXhwIjoxNjQ4NzI3MDAzLCJhdF9oYXNoIjoiY0VCS29HckVBWl9MaDgtY0dMWTMyZyIsIm5vbmNlIjoiRlJmYWhmZ0FHM1ZMY1ZKTmNKRTBabjYuRURsbU1qRmEifQ.IooSxNs3HOggP4T9ew48dF-9s2h6LmAUQooNqrY21dTTO0jN-FTB5pDQ76LmYOutRlj0UvPe_53yw0GD8YUitmXGKgtLtfYBFPiy0YZtfxrLskYY2_3lLwyMFvaQ1KRGr7hGJExQmx2daYdzHWAwhzIY24L5uQHbDMCAQ5cTZAGEubx2VaRCFbeMhIzAOXjKZ9jrHlVdTQVN8sgJmPSt-E52Bk5b4OU9ClINHFYJm_6tRYhRHE-7YPICNZQ2BwdGZWMheK25-eVjM88OV_82AlZeoI-EKSJtpvonQvt_bIztfdQ-pCeu5lsquRwdDS8acWccRF7sBZYQF26OSsIfpQ"


describe.only('Users', () => {
    it('POST / user', () =>{
       return request.post('/').set("Authorization",`Bearer ${TOKEN}`).set("Content-Type","application/json").send({query:"{users {id}}"}).
       then((res)=>{
        console.log("lien check")
       console.log(res.body.data.users[0]) 
      // expect(res.body.email).to.be.eq(data.email);
       //expect(res.body).to.deep.include(data);   
       });  
      });
});