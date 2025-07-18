import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Task } from './schemas/task.schema'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskModel.create(createTaskDto)
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec()
    }

    async findOne(id: string): Promise<Task> {
        const task = await this.taskModel.findById(id).exec()
        if (!task) throw new NotFoundException('Задача не найдена')
            return task
    }

    async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        const task = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, {
            new: true,
        }).exec()
        if (!task) throw new NotFoundException('Задача не найдена')
            return task
    }

    async remove(id: string): Promise<void> {
        const res = await this.taskModel.findByIdAndDelete(id).exec()
        if (!res) throw new NotFoundException('Задача не найдена')
    }
}
