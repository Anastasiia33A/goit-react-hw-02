import css from "../Description/Description.module.css"

export default function Description({ name, description }) {
    return (
        <>
            <h1 className={css.title}>{name}</h1>
            <p className={css.text}>{description}</p>
        </>
    )
};

