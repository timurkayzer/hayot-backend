import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserModel } from "../user.model";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: '121212'
        });
    }

    async validate({ email }: Pick<UserModel, 'email'>) {
        return email;
    }
}