import { UserModel } from '../../data/mongodb';
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from '../../domain';

export class AuthDatasourceImpl implements AuthDatasource {
  
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    
    const { name, email, password } = registerUserDto;

    try {

      // 1. Verificar si ya existe el correo
      const emailExists = await UserModel.findOne({ email });
      if (emailExists) throw CustomError.badRequest('User already exists');

      const user = await UserModel.create({
        name: name, 
        email: email, 
        password: password,
      });

      // 2. Hash de contraseñas

      await user.save();

      // 3. Mapear la respuesta a nuestra entidad
      
      // falta un mapper
      return new UserEntity(
        user.id,
        name,
        email,
        password,
        user.roles,
      );

    } catch (error) {

      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer();
    }

  }

}