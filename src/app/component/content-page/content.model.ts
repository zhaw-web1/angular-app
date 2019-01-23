export interface Content {
  type: string;
}

export interface Title extends Content {
  size?: number;
  title: string;
}

export interface Paragraph extends Content {
  title?: Title;
  text: string;
}

export interface Image extends Content {
  image: string;
}

export interface Quote extends Content {
  quote: string;
  author: string;
}
