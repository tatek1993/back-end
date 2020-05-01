const request = require('supertest');
const server = require('../api/server.js');

describe('authRouter.js', function() {
    describe('POST /register', function() {
        it('should return 201 created', function() {
            return request(server)
                .post('/api/auth/register')
                .send({
                    username: `user_${Date.now()}`,
                    password: 'password',
                    over18: true
                })
                .then(res => {
                    expect(res.body.message).toMatch(/Welcome aboard,/i);
                })
        });

        it('should fail to post if no username is entered', function() {
            return request(server)
                .post('/api/auth/register')
                .send({
                    username: '',
                    password: 'password',
                    over18: true
                })
                .expect(400);
                
        })

    });

    describe('POST /login', function() {
        it('should return a token for a valid user', function() {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'testlogin1',
                    password: 'testing123'
                })
                .then( res => {
                   console.log(res.body)
                   expect(res.body.token).toBeTruthy();
                })
                
        })

        it('should fail for invalid credentials', function() {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'New Name',
                    password: ''
                })
                .expect(401)
                
        });
    })
    
})