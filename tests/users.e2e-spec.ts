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
	it('register - error: 422 / user is already exist', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({ email: 'kapell123@ukr.net', password: 'qwerty1234', name: 'obkin' });
		expect(res.statusCode).toBe(422);
	});

	// it('register - success: 200', async () => {
	// 	const res = await request(application.app)
	// 		.post('/users/register')
	// 		.send({ email: '1234@gmail.com', password: '123456', name: 'obkin' });
	// 	expect(res.statusCode).toBe(200);
	// });

	it('login - error: 401 / user is not exist', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'fake123@ukr.net', password: '123456' });
		expect(res.body.jwt).toBeUndefined();
	});

	it('login - success: 200', async () => {
		const res = await request(application.app)
			.post('/users/login')
			.send({ email: 'kapell123@ukr.net', password: 'qwerty1234' });
		expect(res.body.jwt).not.toBeUndefined();
	});

	it('info - error: 401 / user is not exist', async () => {
		const login = await request(application.app)
			.post('/users/login')
			.send({ email: 'fake123@ukr.net', password: '123456' });
		const res = await request(application.app)
			.get('/users/info')
			.set('Authorization', `Bearer ${login.body.jwt}`);
		expect(res.statusCode).toBe(401);
	});

	it('info - success: 200', async () => {
		const login = await request(application.app).post('/users/login').send({
			email: 'kapell123@ukr.net',
			password: 'qwerty1234',
		});
		const res = await request(application.app)
			.get('/users/info')
			.set('Authorization', `Bearer ${login.body.jwt}`);
		expect(res.statusCode).toBe(200);
	});
});

afterAll(() => {
	application.close();
});
