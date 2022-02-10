const request = require('supertest');
const app = require('./index');

describe('Skill API', () => {
    it('GET /skill --> array skill', () => {
        return request(app)
        .get('/skill/list')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        name: expect.any(String),
                        level: expect.any(String),
                    }),
                ])
            );
        });
    });

    it('GET /skill/id --> specific skill by ID', () => {
        return request(app)
        .get('/skill/list/2')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    name: expect.any(String),
                    level: expect.any(String),
                }),
            );
        });
    });

    it('GET /skill/id --> 404 not found', () => {
        return request(app).get('/skill/list/1').expect(404);
    });
})
