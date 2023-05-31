import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findAll() {
    return {
      code: 200,
      data: [],
      message: 'find all users',
    };
  }
}
