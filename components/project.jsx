import './project.css'

export default function ProjectWrapper({title, description, links}) {

    function Links() {
        return links.map(function(index) {
            return (<a key={crypto.randomUUID()} href={index.link} className="link" style={{verticalAlign: "middle"}}>🔗 {index.title}</a>)
        })
    }

    return (
        <div className="projectWrapper">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <div className="linksContainer">
                <Links/>
            </div>
        </div>
    )
}