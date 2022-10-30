import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CryptoService } from './crypto/crypto.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, CryptoService]
})
export class AuthModule {}
