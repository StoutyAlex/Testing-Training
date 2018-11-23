const request = require('supertest');
const app = require('../../server/app');

describe('Maths REST', () => {
    it('should return correct result when adding', () => {
        const data = { number_1: 10, number_2: 20 };
        return request(app)
        .post(`/maths/add`)
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.result).toBe(30);
        });
    });

    it('should return correct result when subtracting', () => {
        const data = { number_1: 10, number_2: 20 };
        return request(app)
        .post(`/maths/subtract`)
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.result).toBe(-10);
        });
    });

    it('should return correct result when multiplying', () => {
        const data = { number_1: 10, number_2: 20 };
        return request(app)
        .post(`/maths/multiply`)
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.result).toBe(200);
        });
    });

    it('should return correct result when dividing', () => {
        const data = { number_1: 50, number_2: 10 };
        return request(app)
        .post(`/maths/divide`)
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.result).toBe(5);
        });
    });

    it('should return correct result when squaring', () => {
        const data = { number_1: 10 };
        return request(app)
        .post(`/maths/square`)
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body.result).toBe(100);
        });
    });
});