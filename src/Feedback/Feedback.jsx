import css from "../Feedback/Feedback.module.css"

export default function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback })
{
     return(
        <ul>
             <li className={css.text} >Good: {good}</li>
             <li className={css.text}>Neutral: {neutral}</li>
             <li className={css.text}>Bad: {bad}</li>
             <li className={css.text}>Total: {totalFeedback}</li>
             <li className={css.text}>Positive: {positiveFeedback}%</li>
        </ul>
    )
}