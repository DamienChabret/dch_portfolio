export interface InAppNotification {
  Id: string;
  Type: AppNotificationType;
  Message: string;
  DurationInMs?: number;
}

export enum AppNotificationType {
  SUCCESS = 'Success',
  ERROR = 'Error',
  INFO = 'Info',
  WARNING = 'Warning',
}