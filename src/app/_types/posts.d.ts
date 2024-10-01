declare namespace Posts {
  export interface Post {
    id: string
    title: string
    content: string
    author: string
    createdAt: Date
  }

  export interface PostId {
    id: string
  }

  export interface Search {
    searchParams: {
      search?: string
      id?: string
    }
  }
}
