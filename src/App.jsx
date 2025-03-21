import { Header } from './components/header';
import { Post } from './post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Arthur Silveira" date="04 Jun 2021" content="Lorem ipsum dolor sit s s ultricies. Nullam nec purus nec nunc ultricies ultricies." />
          <Post author="Arthur Silveira" date="04 Jun 2021" content="Lorem ipsum dolor sit aies." />
        </main>
      </div>
    </div>
   
  )
}

export default App
