interface PostPageProps {
  searchParams: {
    search?: string
  }
}

const PostPage = ({ searchParams }: PostPageProps) => {
  return (
    <div>
      <h1>{searchParams?.search}</h1>
    </div>
  )
}

export default PostPage
