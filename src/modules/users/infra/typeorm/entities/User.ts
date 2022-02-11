import { IUserDTO } from '@modules/users/dtos/IUser';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User implements IUserDTO {
  @PrimaryColumn('uuid')
  id!: string;

  @Column('varchar', { length: 255 })
  name!: string;

  @Column('varchar', { length: 255 })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  email_verified!: boolean;

  @Column({ nullable: true })
  avatar_url!: string;

  @Column({ nullable: true })
  provider!: string;

  @Column('varchar', { length: 255, nullable: true })
  provider_user_id!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
