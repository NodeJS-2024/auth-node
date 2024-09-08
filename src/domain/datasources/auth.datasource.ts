import { LoginUserDto, RegisterUserDto } from '..';
import { UserEntity } from '../entities/user.entity';

// Reglas de negocio
export abstract class AuthDatasource {
  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
  abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>;
}