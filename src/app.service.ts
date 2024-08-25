import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { prisma } from './lib/prisma';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async create(): Promise<void> {
    await prisma.test.create({
      data: { id: randomUUID() },
    });
  }

  async list(): Promise<any> {
    const items = await prisma.test.findMany({});

    return items;
  }
}
