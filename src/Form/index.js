import "./style.css";

const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("test");
};

const Form = () => (
    <form className="section__form" onSubmit={onFormSubmit}>
        <input className="form__input" placeholder="Co jest do zrobienia?" required />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;