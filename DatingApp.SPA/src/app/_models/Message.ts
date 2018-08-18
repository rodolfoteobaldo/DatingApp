export interface Message {
  id: number;
  senderId: number;
  senderKnownAs: string;
  senderPhotoUrl: string;
  recipientId: number;
  recipientKnownAs: string;
  recipientPhotoUrl: string;
  // nome da propriedade deveria ser Content, está context por causa da API
  context: string;
  isRead: boolean;
  dateRead: Date;
  messageSent: Date;
}
