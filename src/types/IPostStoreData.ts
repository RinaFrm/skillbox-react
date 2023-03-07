export interface IPostStoreData {
  title: string;
  postId: string;
  publishedData: number;
  user: { logoPath?: string; name: string };
  previewPath?: string;
  karmaValue: number;
  url: string;
  postText: string;
  subreddit: string;
  name: string;
  // postId: string;
  // name: string;
  // author: string;
  // title: string;
  // karma: number;
  // imgUrl: string;
  // created: number;
  // subreddit: string;
  // commentsQty: number;
  // postText: string
}