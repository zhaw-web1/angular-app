import {Content} from './content.model';

export interface News {

  id: string;
  title: string;
  image: string;
  content: {[key: number]: Content};

}
