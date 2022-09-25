import Head from 'next/head'

const posts = [
  { id: 1, title: 'Next testing', excerpt: 'Learn next testing' },
  { id: 2, title: 'Next with tailwind', excerpt: 'Learn next testing' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <div key={post.id}>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>

          </div>
        </div>
      </div>

    </div>
  )
}
