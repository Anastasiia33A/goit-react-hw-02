import css from "./Options.module.css"

export default function Options({ updateFeedback, handleReset, totalFeedback }) {
    return (
        <div className={css.wrapper}>
            <button className={css.button} onClick={() => { updateFeedback("good") }} type="button">Good</button>
            <button className={css.button} onClick={() => { updateFeedback("neutral") }} type="button">Neutral</button>
            <button className={css.button} onClick={() => { updateFeedback("bad") }} type="button">Bad</button>
            {totalFeedback > 0 && (<button className={css.button} onClick={handleReset} type="button">Reset</button>)}
        </div>
    )
}
