import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Contact } from "./contact.entitie";

import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 200 })
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 15 })
  telephone: string;

  @CreateDateColumn()
  date: Date;

  @OneToMany(() => Contact, (contacts) => contacts.user, { cascade: true })
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
