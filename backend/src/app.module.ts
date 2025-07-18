import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TasksModule } from './task/task.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tasks-manager'),
    TasksModule
  ]
})

export class AppModule {}
