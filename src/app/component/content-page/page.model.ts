import {Content} from './content.model';
import {firestore} from 'firebase';

export interface Page {

  id: string;
  title: string;
  usesNewImage: boolean;
  image: string;
  news?: boolean;
  date?: firestore.Timestamp;
  content: Content[];

}
