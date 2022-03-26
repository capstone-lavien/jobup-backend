import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StackToStack } from './stack-to-stack.entity';
import { TaskToStack } from './task-to-stack.entity';
import { WishTask } from './wish-task.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @OneToMany(() => WishTask, (wishTask) => wishTask.task)
  wishTasks: WishTask[];

  @OneToMany(() => TaskToStack, (taskToStack) => taskToStack.task)
  taskToStacks: WishTask[];

  @OneToMany(() => StackToStack, (stackToStack) => stackToStack.task)
  stackToStacks: WishTask[];

  @Column({ length: '255' })
  taskName: string;

  @Column({ type: 'bigint' })
  taskCode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
