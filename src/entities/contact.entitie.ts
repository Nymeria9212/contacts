import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./users.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 100 })
  full_name: string;

  @Column({ length: 15 })
  telephone: string;

  @Column({ length: 50 })
  email: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => User)
  user: User;
}

export { Contact };
