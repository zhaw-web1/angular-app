import {Content} from './content';

export interface News {

  title: string;
  image: string;
  content: {[key: number]: Content};

}
