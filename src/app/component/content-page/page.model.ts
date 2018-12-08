import {Content} from './content.model';

export interface Page {

  id: string;
  title: string;
  image: string;
  content: {[key: number]: Content};

}
