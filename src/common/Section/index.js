import { Component, Header, SubHeader, Content } from "./styled";

const Section = ({ title, body, extraHeaderContent, extraSectionContent }) => (
    <Component>
        <Header>
            <SubHeader>{title}</SubHeader>
            {extraHeaderContent}
            {extraSectionContent}
        </Header>
        <Content>
            {body}
        </Content>
    </Component>

);
export default Section;