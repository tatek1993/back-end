const require = require('supertest');
const server = require('../api/server.js');

describe('authRouter.js', function() {
    describe('PUT /:id', function() {
        it('should return 200 updated', function() {
            return request(server)
                .put('/api/searches/:id')
                .send({
                    "user_id": 1,
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
        })
    })
})