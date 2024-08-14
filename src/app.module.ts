import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoansModule } from './loans/loan.module';
import { UsersModule } from './users/user.module';

@Module({
  imports: [LoansModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
