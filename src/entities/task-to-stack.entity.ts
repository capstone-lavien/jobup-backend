import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity('task_to_stack')
export class TaskToStack {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @ManyToOne(() => Task, (task) => task.taskToStacks, { nullable: false })
  task: Task;

  @Column()
  stack: string;

  @Column()
  num: number;

  @CreateDateColumn({ type: 'timestamp without time zone' })
  createdAt: Date;
}
