// src/user/dto/create-user.dto.ts
export class CreateUserDto {
    email: string;
    password: string;
    role: 'admin' | 'user';
  }
  
  // src/user/dto/login-user.dto.ts
 // src/user/dto/login-user.dto.ts
export class LoginUserDto {
  email: string;
  password: string;
}

  