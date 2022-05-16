import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from '../entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from '../dto/create-task.dto'
import { TaskDTO } from 'src/dto/task.dto';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

    public async createOne(createTaskRequest: CreateTaskDTO){
        const task: Task = new Task();
        task.title = createTaskRequest.title;
        task.description = createTaskRequest.description;
        task.status = TaskStatus.Created;

        await this.taskRepository.save(task);

        const taskDTO = new TaskDTO();
        taskDTO.id = task.id;
        taskDTO.title = task.title;
        taskDTO.description = task.description;
        taskDTO.status = task.status;

        return taskDTO;

    }
}
