import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'

import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { TasksService } from './task.service'

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Создать задачу' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto)
  }

  @Get()
  @ApiOperation({ summary: 'Получить все задачи' })
  findAll() {
    return this.tasksService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить задачу по id' })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить задачу' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить задачу' })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id)
  }
}
