import { Repository } from 'typeorm';
import { Contact } from '../entities/contact.entity';

export class ContactRepository extends Repository<Contact> {
  async findByPhone(phone: string): Promise<Contact | undefined> {
    return this.findOne({ where: { phone } });
  }

  async findById(id: string): Promise<Contact | undefined> {
    return this.findOne({ where: { id } });
  }
}