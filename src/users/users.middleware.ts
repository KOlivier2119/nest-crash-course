import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable() 
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
      console.log('Example Middleware.')
      console.log(req.headers.authorization)
      const {authorization} = req.headers;

      if(!authorization) throw new HttpException('No authorizations Token', HttpStatus.FORBIDDEN);

      if (authorization == 'Olivier') next();
      else throw new HttpException('Invalid authorization token', HttpStatus.FORBIDDEN)
  }
}