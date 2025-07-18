import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { TaskCategoryType, TaskPriorityType, TaskStatusType } from './task.types'



@Schema({ timestamps: true })
export class Task extends Document {
    @Prop({ required: true })
    title: string

    @Prop()
    description: string

    @Prop({ required: true, enum: ['TO_DO', 'IN_PROGRESS', 'DONE'] })
    status: TaskStatusType

    @Prop({ required: true, enum: ['LOW', 'MEDIUM', 'HIGH'] })
    priority: TaskPriorityType

    @Prop({ type: [String], default: [] })
    tags: TaskCategoryType[]

    @Prop()
    createdAt: string

    @Prop()
    updatedAt: string
}

export const TaskSchema = SchemaFactory.createForClass(Task)
