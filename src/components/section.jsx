import s from './section.module.css'


export const Section = ({ title, children }) => {
    return <section className={s.section}><h1>{title}</h1>
        {children}
    </section>
    
}