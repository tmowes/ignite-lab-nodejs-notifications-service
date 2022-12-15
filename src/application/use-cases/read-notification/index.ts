import { Injectable } from '@nestjs/common'
import { NotificationsRepository } from '@application/repositories/notifications-repository'

import { NotificationNotFound } from '../errors/notification-not-found'
import { ReadNotificationRequest, ReadNotificationResponse } from './types'

@Injectable()
export class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
    const { notificationId } = request

    const notification = await this.notificationsRepository.findById(notificationId)

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.read()

    await this.notificationsRepository.save(notification)
  }
}
