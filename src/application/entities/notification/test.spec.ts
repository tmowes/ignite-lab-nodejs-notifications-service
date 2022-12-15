import { Content } from '../content'

import { Notification } from '.'

describe('Notification', () => {
  it('should be  able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      content: new Content('Você recebeu uma nova mensagem'),
      category: 'social',
    })

    expect(notification).toBeTruthy()
  })
})
