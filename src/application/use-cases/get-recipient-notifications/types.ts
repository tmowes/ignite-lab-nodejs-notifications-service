import { Notification } from '@application/entities/notification'

export type GetRecipientNotificationsRequest = {
  recipientId: string
}

export type GetRecipientNotificationsResponse = {
  notifications: Notification[]
}
