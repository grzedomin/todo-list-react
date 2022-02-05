import "./style.css";


const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__subHeader">{title}</h2>
            {extraHeaderContent}
        </header>

        <div className="main__taskList">
            {body}
        </div>
    </section>

)

export default Section;