import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';

import{Post as PostSchema} from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

//引入快速生成接口插件
import { Crud } from 'nestjs-mongoose-crud'

// 装饰类

@Crud({
  model:PostSchema
})
@Controller('posts')
@ApiTags('帖子接口')
export class PostsController {
  // 引入module的new的类
  constructor(
    @InjectModel(PostSchema) private readonly model:ModelType<PostSchema>
  ) {}

}
