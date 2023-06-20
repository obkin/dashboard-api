import 'reflect-metadata';
import { bootstrapReturn } from '../src/main';
import { App } from '../src/app';
import request from 'supertest';

let application: App;

beforeAll(async () => {
	const { app } = await bootstrapReturn;
	application = app;
});

describe('UsersController - e2e', () => {
	it('Error - user is already exist', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({ email: 'kapell228@ukr.net', password: '123456' });
		expect(res.statusCode).toBe(422);
	});
});

afterAll(() => {
	application.close();
});
