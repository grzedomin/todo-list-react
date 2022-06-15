import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Author = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Grzegorz Domin"
            body={<p>Hej! Nazywam się <strong>Grzegorz</strong> i mam <strong>23</strong> lata. Programuję od pół roku i każdego dnia stawiam kolejny krok aby zostać Front-End Developerem. Moją pasją jest muzyka, od 7 lat gram na <strong>perkusji</strong>, od prawie dwóch na <strong>gitarze</strong>. Oprócz muzyki uwielbiam sport, piłka nożna, squash to dwie aktywności, którę lubię najbardziej ;)
            </p>}
        />
    </Container>
);

export default Author;