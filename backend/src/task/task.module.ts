import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Task, TaskSchema } from './schemas/task.schema'
import { TasksController } from './task.controller'
import { TasksService } from './task.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
