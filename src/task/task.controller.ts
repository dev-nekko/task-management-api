import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Get()
    public async getAll(){
        const resp = await this.taskService.getAll();

        return resp;
    }
    
    
    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO){
        const resp = await this.taskService.createOne(createTaskRequest);

        return resp;

    }
}
