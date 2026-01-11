export interface InAppNotification {
  id: string;
  type: AppNotificationType;
  message: string;
  durationInMs?: number;
}

export enum AppNotificationType {
  SUCCESS = 'Success',
  ERROR = 'Error',
  INFO = 'Info',
  WARNING = 'Warning',
}