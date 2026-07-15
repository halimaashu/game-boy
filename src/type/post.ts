export interface Comment {
  commenterName: string;
  commentText: string;
  commentAt: string;
}

export interface Post {
  _id: string;
  title: string;
  description: string;
  gameName: string;
  authorName: string;
  authorEmail:string;
  createAt: string;
  comment: Comment[];
  authorImage:string;
  category:string;
  thumbnail:string;
  game:string;
  gameMode:string;
  platform:string;
  tags:string;
  like:number;
}