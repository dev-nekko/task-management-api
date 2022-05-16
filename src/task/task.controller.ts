import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { TaskService } from './task.service';
import { UpdateTaskDTO } from '../dto/update-task.dto';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Get()
    public async getAll(){
        const resp = await this.taskService.getAll();

        return resp;
    }
    
    @Get("/:id")
    public async getOne(@Param("id") taskId: number){
        const resp = await this.taskService.getOne(taskId);
        return resp;

    }
    
    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO){
        const resp = await this.taskService.createOne(createTaskRequest);

        return resp;

    }

    @Put("/:id")
    public async updateOne(@Param("id") taskId: number, @Body() updateTaskRequest: UpdateTaskDTO){
        const resp = await this.taskService.updateOne(taskId,updateTaskRequest);

        return resp;

    }

}
