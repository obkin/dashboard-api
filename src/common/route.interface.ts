import { Request, Response, NextFunction, Router } from "express";

class IControllerRoute {
    path: string;
    func: (req: Request, res: Response, next: NextFunction) => void;
    method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
}

export { IControllerRoute };