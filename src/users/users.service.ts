import { inject, injectable } from 'inversify';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';
import { IUsersRepository } from './users.repository.interface';
import { UserModel } from '@prisma/client';
import { UserLoginDto } from './dto/user-login.dto';

@injectable()
class UserService implements IUserService {
	constructor(
		@inject(TYPES.ConfigService) private configService: IConfigService,
		@inject(TYPES.UsersRepository) private usersRepository: IUsersRepository,
	) {}
	async createUser({ email, name, password }: UserRegisterDto): Promise<UserModel | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		const existUser = await this.usersRepository.find(email);
		if (existUser) {
			return null;
		} else {
			return this.usersRepository.create(newUser);
		}
	}

	async validateUser({ email, password }: UserLoginDto): Promise<boolean> {
		const existUser = await this.usersRepository.find(email);
		if (existUser) {
			const newUser = new User(existUser.email, existUser.name, existUser.password);
			return newUser.comparePassword(password);
		} else {
			return false;
		}
	}

	async findUser(email: string): Promise<UserModel | null> {
		return this.usersRepository.find(email);
	}
}

export { UserService };
