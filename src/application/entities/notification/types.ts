import { Content } from '../content'

export type NotificationProps = {
  recipientId: string
  content: Content
  category: string
  readAt?: Date | null
  canceledAt?: Date | null
  createdAt: Date
}
