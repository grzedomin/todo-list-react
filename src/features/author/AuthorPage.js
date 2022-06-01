import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Grzegorz Domin"
            body={<p>Hej! Nazywam się <strong>Grzegorz</strong> i mam <strong>23</strong> lata. Programuję od pół roku i idzie mi coraz lepiej! Moją pasją jest muzyka, od 7 lat gram na <strong>perkusji</strong>, od prawie dwoch na <strong>gitarze</strong>. Programowania uczę się od pół roku i z dnia na dzień wychodzi mi to coraz lepiej ;)
            </p>}
        />
    </Container>
);