import { inject, injectable } from 'inversify';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';

@injectable()
class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}
	async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		return null;
	}

	async validateUser(): Promise<boolean> {
		return true;
	}
}

export { UserService };
