import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): any {
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);
        if(errors.length){
            throw new ValidationExeption("");
        }
    }
}