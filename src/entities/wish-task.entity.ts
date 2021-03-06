import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';

@Entity('wish_task')
export class WishTask {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => User, (user) => user.wishTasks, { nullable: false })
  user: User;

  @ManyToOne(() => Task, (task) => task.wishTasks, { nullable: false })
  task: Task;

  @Column()
  taskId: string;

  @Column()
  priority: number;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;
}
