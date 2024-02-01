import './button.css'

export default function ButtonLink({link, name}) {

    function click() {
        window.location.href = link;
    }

    return (
        <div className="wrapper">
            <button onClick={click} className="button">
                {name}
            </button>
            <picture>
                <source srcSet="/open_dark.svg" media="(prefers-color-scheme: dark)"></source>
                <img src="/open_light.svg" alt="open link icon" />
            </picture>
        </div>
    )
}