export interface Content {
  type: ContentType;
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

export enum ContentType {
  TITLE,
  PARAGRAPH,
  IMAGE
}
