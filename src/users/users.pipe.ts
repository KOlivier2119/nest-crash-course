import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { parseArgs } from 'util';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { PassThrough } from 'stream';

@Injectable()
export class UsersPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log("Inside the UsersPipe");
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException('Invalid Data Type for property age. Expected Number', HttpStatus.BAD_REQUEST)
    }
    return { ...value, age: parseAgeToInt}
  }
}
