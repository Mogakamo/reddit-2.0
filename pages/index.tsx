import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, PostBox } from '../components'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Postbox */}
      <PostBox />
      <div>
        {/* Feed */}

      </div>
    </div>
  )
}

export default Home
