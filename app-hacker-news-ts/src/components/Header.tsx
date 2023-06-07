import {header, link} from './Header.css.ts'

export const Header = () => {
    return (
    <nav className={header}>
        <img src="/vite.svg" alt="vite logo" />
        <a className={link} href="/">
            HACKER NEWS
        </a>
    </nav>
    )
}