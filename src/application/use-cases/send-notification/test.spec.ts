import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications'

import { SendNotificationRequest } from './types'

import { SendNotification } from '.'

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)
    const request: SendNotificationRequest = {
      recipientId: 'example-recipient-id',
      content: 'Você recebeu uma nova mensagem',
      category: 'social',
    }
    const { notification } = await sendNotification.execute(request)

    expect(notificationsRepository.notifications).toHaveLength(1)
    expect(notificationsRepository.notifications[0]).toEqual(notification)
  })
})
