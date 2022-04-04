import { Component, Header, SubHeader, Content } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Component>
        <Header>
            <SubHeader>{title}</SubHeader>
            {extraHeaderContent}
        </Header>

        <Content>
            {body}
        </Content>
    </Component>

);
export default Section;