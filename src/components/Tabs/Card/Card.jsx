
import { useContext } from 'react';
import { ThemeContext } from './../../../theme';

function defaultRenderPriorities({ label, value}) {
    return (
        <label></label>
    )
}

export default function Card({ title, body}) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`card card-${theme} c-${theme}`}>
            {title}
            {body}
        </div>
    )
}