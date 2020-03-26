import { prop} from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Post {
    @ApiProperty({ description: '标题',example:'帖子标题' })
    @IsNotEmpty({message:'标题不能为空'})
    @prop()
    title:string

    @ApiProperty({ description: '内容',example:'帖子内容' })
    @IsNotEmpty({message:'内容不能为空'})
    @prop()
    content:string
}

