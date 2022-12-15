import { NotificationsRepository } from '@application/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

import { NotificationNotFound } from '../errors/notification-not-found'
import { UnreadNotificationRequest, UnreadNotificationResponse } from './types'

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
    const { notificationId } = request

    const notification = await this.notificationsRepository.findById(notificationId)

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.unread()

    await this.notificationsRepository.save(notification)
  }
}
