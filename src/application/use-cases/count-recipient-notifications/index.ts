import { NotificationsRepository } from '@application/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

import { CountRecipientNotificationsRequest, CountRecipientNotificationsResponse } from './types'

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId)

    return { count }
  }
}
