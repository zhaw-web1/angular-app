export interface Content {
  type: ContentType;
}

export interface Title extends Content {
  title: string;
}

export interface Paragraph extends Content {
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
