import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansModule } from './loans/loan.module';
import { UsersModule } from './users/user.module';
import { HttpErrorFilter } from './filters/http-error.filter';

@Module({
  imports: [LoansModule, UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule { }
