import { NextFunction, Request, Response } from 'express';

interface IUserController {
	login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
	register: (req: Request, res: Response, next: NextFunction) => Promise<void>;
	info: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export { IUserController };
