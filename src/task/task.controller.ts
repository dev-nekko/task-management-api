import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO){
        const resp = await this.taskService.createOne(createTaskRequest);

        return resp;

    }
}
