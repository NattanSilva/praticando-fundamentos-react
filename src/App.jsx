import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Matheus Fernandes'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consequuntur autem a aperiam. Totam doloribus officia, sed dolorum blanditiis dolor? Laudantium deserunt vel, possimus a unde sed amet dicta facilis!'
          />
          <Post
            author='Gabriel Bernardes'
            content='Outro post legal de exemplo'
          />
        </main>
      </div>
    </div>
  )
}
