import { UserToTask } from "src/entity/user-to-task.entity";
import { CustomRepository } from "src/typeorm/typeorm-ex.decorator";
import { Repository } from "typeorm";

@CustomRepository(UserToTask)
export class UserToTaskRepository extends Repository<UserToTask> {
    
}