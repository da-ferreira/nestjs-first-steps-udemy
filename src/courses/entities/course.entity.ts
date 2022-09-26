import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tag.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  // Lá pra entidade de Tag existe uma propriedade courses. O lado inverso da relação
  @ManyToMany(() => Tag, (tag) => tag.courses, { cascade: true })
  tags: string[];
}
