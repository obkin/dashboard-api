import 'reflect-metadata';
import { Container } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { IUserService } from './users.service.interface';
import { IUsersRepository } from './users.repository.interface';
import { TYPES } from '../types';
import { UserService } from './users.service';
import { UserModel } from '@prisma/client';
import { User } from './user.entity';

// -------- Enter data for test: --------

// User data:
const userData = {
	email: 'kapell123@ukr.net', // any (string)
	name: 'Yarik', // any (string)
	password: '123456', // any (string)
	id: 1, // change: describe -> it -> usersRepository, as well!
};

// configService data:
const configServiceReturn = 'SECRET';

// Expected user data:
const expectedUserID = 1;
const expectedUserPassword = 123456;

// --------------------------------------

const ConfigServiceMock: IConfigService = {
	get: jest.fn(),
};

const UsersRepositoryMock: IUsersRepository = {
	find: jest.fn(),
	create: jest.fn(),
};

const container = new Container();
let userService: IUserService;
let configService: IConfigService;
let usersRepository: IUsersRepository;

beforeAll(() => {
	container.bind<IUserService>(TYPES.UserService).to(UserService);
	container.bind<IConfigService>(TYPES.ConfigService).toConstantValue(ConfigServiceMock);
	container.bind<IUsersRepository>(TYPES.UsersRepository).toConstantValue(UsersRepositoryMock);

	userService = container.get<IUserService>(TYPES.UserService);
	configService = container.get<IConfigService>(TYPES.ConfigService);
	usersRepository = container.get<IUsersRepository>(TYPES.UsersRepository);
});

let createdUser: UserModel | null;

describe('UserService', () => {
	it('createUser', async () => {
		configService.get = jest.fn().mockReturnValueOnce(configServiceReturn);
		usersRepository.create = jest.fn().mockImplementationOnce(
			(user: User): UserModel => ({
				name: user.name,
				email: user.email,
				password: user.password,
				id: 1,
			}),
		);
		createdUser = await userService.createUser(userData);
		expect(createdUser?.id).toEqual(expectedUserID);
		expect(createdUser?.password).not.toEqual(expectedUserPassword);
	});
	it('validateUser - success', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(createdUser);
		const res = await userService.validateUser({
			email: 'kapell123@ukr.net',
			password: '123456',
		});
		expect(res).toBeTruthy();
	});
	it('validateUser - incorrect password', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(createdUser);
		const res = await userService.validateUser({
			email: 'kapell123@ukr.net',
			password: '654321',
		});
		expect(res).toBeFalsy();
	});
	it('validateUser - user is not exist', async () => {
		usersRepository.find = jest.fn().mockReturnValueOnce(null);
		const res = await userService.validateUser({
			email: 'kapell123@ukr.net',
			password: '123456',
		});
		expect(res).toBeFalsy();
	});
});
