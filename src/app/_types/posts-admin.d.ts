declare namespace PostsAdmin {
  export interface PostAdmin {
    _id: string
    title: string
    content: string
    author: string
    createdAt: Date
  }

  export interface PostPageProps {
    _id: string
  }

  export interface PostContent {
    title: string
    content: string
    author: string
  }
}
