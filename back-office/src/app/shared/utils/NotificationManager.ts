import { Injectable } from '@angular/core';
import { AppNotificationType, InAppNotification } from '@models/InterfaceNotificationInApp';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications: InAppNotification[] = [];
  private notificationsSubject = new BehaviorSubject<InAppNotification[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();

  // --- Fonction générique ---
  private notify(
    type: InAppNotification['Type'],
    message: string,
    durationInMs = 3000
  ) {
    const id = crypto.randomUUID();
    const newNotification: InAppNotification = { Id: id, Type:type, Message:message, DurationInMs: durationInMs };

    this.notifications.push(newNotification);
    this.notificationsSubject.next(this.notifications);

    if (durationInMs && durationInMs > 0) {
      setTimeout(() => this.remove(id), durationInMs);
    }
  }

  // --- Fonctions raccourcies ---
  success(message: string, duration = 3000) {
    this.notify(AppNotificationType.SUCCESS, message, duration);
  }

  error(message: string, duration = 5000) {
    this.notify(AppNotificationType.ERROR, message, duration);
  }

  info(message: string, duration = 3000) {
    this.notify(AppNotificationType.INFO, message, duration);
  }

  warning(message: string, duration = 4000) {
    this.notify(AppNotificationType.WARNING, message, duration);
  }

  // --- Suppression ---
  remove(id: string) {
    this.notifications = this.notifications.filter((n) => n.Id !== id);
    this.notificationsSubject.next(this.notifications);
  }

  clear() {
    this.notifications = [];
    this.notificationsSubject.next([]);
  }
}
