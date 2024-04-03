import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({ children, tamanho }) {
    return (
        <buttom className={`
        ${styles.botaoPrincipal}
        ${styles[tamanho]}
        `} >
            {children}
        </buttom>
    )
}
