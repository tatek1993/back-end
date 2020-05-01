const request = require('supertest');
const server = require('../api/server.js');



describe('GET /api/searches', function() {
    it('should return a list of searches', function() {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testlogin1',
                password: 'testing123'
            })
            .then( res => {
                return request(server)
                .get('/api/searches')
                .set('Authorization', res.body.token )
                .then( res => {
                    expect(res.status).toBe(200);
                })
            });
    })

    it('should fail with no authentication', function() {
        
        return request(server)
        .get('/api/searches')
        .then( res => {
            expect(res.status).toBe(400);
            })
            
    });
})

describe('POST /api/searches', function() {
    it('should create a new search', function() {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testlogin1',
                password: 'testing123'
            })
            .then(res => {
                return request(server)
                .post('/api/searches')
                .set('Authorization', res.body.token )
                .send({
                    "effect": [
                        "Tingly",
                        "Aroused"
                    ],
                    "flavor": [
                        "Minty",
                        "Pine"
                    ],
                    "symptoms": [
                        "Lack of Appetite",
                        "Happy",
                        "Giggly"
                    ],
                    "results": [
                        "Island-Haze",
                        "Batgirl",
                        "Sinai",
                        "Starbud",
                        "Tesla"
                    ]
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
                
            })
    })
})

describe('GET /api/searches/:id', function() {
    it('should return a search with the given search id', function() {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testlogin1',
                password: 'testing123'
            })
            .then( res => {
                return request(server)
                .get('/api/searches/4')
                .set('Authorization', res.body.token )
                .then( res => {
                    expect(res.status).toBe(200);
                })
            });
    })
})


describe('PUT /api/searches/:id', function() {
    it('should return 400 without authorization', function() {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testlogin1',
                password: 'testing123'
            })
            .then(res => {
                return request(server)
                .put('/api/searches/4')
                .send({
                    "effect": [
                        "Tingly",
                        "Aroused"
                    ],
                    "flavor": [
                        "Minty",
                        "Pine"
                    ],
                    "symptoms": [
                        "Lack of Appetite",
                        "Happy",
                        "Giggly"
                    ],
                    "results": [
                        "Island-Haze",
                        "Batgirl",
                        "Sinai",
                        "Starbud",
                        "Tesla"
                    ]
                })
                .then( res => {
                    expect(res.status).toBe(400);
                })
            })
            
    })

    it('should edit a search and return 200 with authorization', function() {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testlogin1',
                password: 'testing123'
            })
            .then(res => {
                return request(server)
                .put('/api/searches/4')
                .set('Authorization', res.body.token )
                .send({
                    "effect": [
                        "Tingly",
                        "Aroused"
                    ],
                    "flavor": [
                        "Minty",
                        "Pine"
                    ],
                    "symptoms": [
                        "Lack of Appetite",
                        "Happy",
                        "Giggly"
                    ],
                    "results": [
                        "Island-Haze",
                        "Batgirl",
                        "Sinai",
                        "Starbud",
                        "Tesla"
                    ]
                })
                .then( res => {
                    expect(res.status).toBe(200);
                })
            })
            
    })
})

describe('DEL /api/searches/:id', function() {
    it('should delete search and return 200', function() {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testlogin1',
                password: 'testing123'
            })
            .then(res => {
                return request(server)
                .del('/api/searches/6')
                .set('Authorization', res.body.token )
                .then( res => {
                    expect(res.status).toBe(200);
                })
            })
    })

    it('should return 404 without valid search id', function() {
        return request(server)
            .post('/api/auth/login')
            .send({
                username: 'testlogin1',
                password: 'testing123'
            })
            .then(res => {
                return request(server)
                .del('/api/searches')
                .set('Authorization', res.body.token )
                .then( res => {
                    expect(res.status).toBe(404);
                })
            })
    })
})