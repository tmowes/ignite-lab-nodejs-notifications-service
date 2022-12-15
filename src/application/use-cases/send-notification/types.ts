import { Notification } from '@application/entities/notification'

export type SendNotificationRequest = {
  recipientId: string
  content: string
  category: string
}

export type SendNotificationResponse = {
  notification: Notification
}
