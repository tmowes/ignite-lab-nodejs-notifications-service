import { Injectable } from '@nestjs/common'
import { Notification } from 'src/application/entities/notification'
import { NotificationsRepository } from 'src/application/repositories/notifications-repository'

import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(notification: Notification) {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
      },
    })
  }
}
