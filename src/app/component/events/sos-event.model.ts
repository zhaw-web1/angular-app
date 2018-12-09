import {firestore} from 'firebase';

export interface SosEvent {
  id?: string;
  date: firestore.Timestamp;
  time?: firestore.Timestamp;
  title: string;
}
