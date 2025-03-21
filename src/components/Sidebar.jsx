import styles from './Sidebar.module.css';

export function Sidebar(){
return (
    <aside className={styles.sidebar}>
        <img className={styles.cover}src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" />
        <div className={styles.profile}>
            <strong>Arthur Silveira</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                Editar seu Perfil
            </a>
        </footer>
    </aside>
)
}