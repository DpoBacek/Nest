import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private UserService: UsersService){}
    @ApiOperation({summary:'Создание пользователя'})
    @ApiResponse({status:200,type:User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.UserService.createUser(userDto);
    }
    @ApiOperation({summary:'Получение всех пользователей'})
    @ApiResponse({status:200,type:[User]})
    @Get()
    getAll(){
        return this.UserService.getAllUser();
    }
}
