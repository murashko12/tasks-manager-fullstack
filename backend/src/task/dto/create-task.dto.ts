import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator'
import { TaskCategory, TaskCategoryType, TaskPriority, TaskPriorityType, TaskStatus, TaskStatusType } from '../schemas/task.types'

export class CreateTaskDto {
    @ApiProperty()
    @IsString()
    @MaxLength(120)
    title: string

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    description?: string

    @ApiProperty({ enum: Object.values(TaskStatus) })
    @IsEnum(TaskStatus)
    status: TaskStatusType

    @ApiProperty({ enum: Object.values(TaskPriority) })
    @IsEnum(TaskPriority)
    priority: TaskPriorityType

    @ApiProperty({ type: [String], enum: Object.values(TaskCategory) })
    @IsArray()
    @IsEnum(TaskCategory, { each: true })
    tags: TaskCategoryType[]
}
