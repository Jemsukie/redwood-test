import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>

        <div>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
