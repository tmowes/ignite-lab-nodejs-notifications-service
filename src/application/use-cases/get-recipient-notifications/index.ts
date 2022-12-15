import { NotificationsRepository } from '@application/repositories/notifications-repository'
import { Injectable } from '@nestjs/common'

import { GetRecipientNotificationsRequest, GetRecipientNotificationsResponse } from './types'

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId)

    return { notifications }
  }
}
