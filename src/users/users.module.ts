import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';
import { AnotherMiddleware } from './another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(UsersMiddleware).forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET,
        }
      ).apply(AnotherMiddleware).forRoutes(
        {
          path: 'users/create',
          method: RequestMethod.POST
        }
      )
  }
}
