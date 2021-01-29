import { Controller, Get, Req, Body, Post, Param } from '@nestjs/common';
import Request from 'express';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findAll(@Param('id') id: string): string {
    return `This action returns a #${id} cats`;
  }

  @Post()
  createCat(@Body() body: Body): string {
    console.log(body)
    // console.log(request.headers)
    return 'This method create a new cat';
  }
}
