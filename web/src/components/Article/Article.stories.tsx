import Article from './Article'

export const generated = () => {
  return (
    <Article
      article={{
        id: 0,
        title: '',
        body: '',
        createdAt: '',
      }}
    />
  )
}

export default { title: 'Components/Article' }
