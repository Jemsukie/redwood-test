import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <>
        <>
          <ArticlesCell />
        </>

        <p>This is the homepage</p>
      </>
    </>
  )
}

export default HomePage
