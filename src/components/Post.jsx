import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/NattanSilva.png' />
          <div className={styles.authorInfo}>
            <strong>Nattan Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='03 de Março às 17:23' dateTime='2025-03-03 17:23:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galeraa 👋 É um projeto que fiz no NLW Return, evento da
          Rocketseat. O nome do projeto é DoctorCare 🚀 Acabei de subir mais um
          projeto no meu portifa.
        </p>
        <p>
          <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
