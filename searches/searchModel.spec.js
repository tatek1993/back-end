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

// describe('authRouter.js', function() {
//     describe('PUT /:id', function() {
//         it('should return 200 updated', function() {
//             return request(server)
//                 .put('/api/searches/:id')
//                 .send({
//                     "user_id": 1,
//                     "effect": [
//                         "Tingly",
//                         "Aroused"
//                     ],
//                     "flavor": [
//                         "Minty",
//                         "Pine"
//                     ],
//                     "symptoms": [
//                         "Lack of Appetite",
//                         "Happy",
//                         "Giggly"
//                     ],
//                     "results": [
//                         "Island-Haze",
//                         "Batgirl",
//                         "Sinai",
//                         "Starbud",
//                         "Tesla"
//                     ]
//                 })
//         })
//     })
// })