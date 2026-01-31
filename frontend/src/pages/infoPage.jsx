import "../stylesheets/App.css";
import { Section } from "../components/section";
import background from "../assets/background_home.png";
import { Navbar } from "../components/navbar";
import { NavLink } from "../components/navButton";
import { Logo } from "../components/navbarLogo";
import { Title } from "../components/title";
import { Subtitle } from "../components/subtitle";
import { Card } from "../components/card";
import { TextContainer } from "../components/textContainer";
import { Paragraph } from "../components/paragraph";
import { Texts } from "../data/texts";
import { Image } from "../components/imageContainer";
import { CardForms } from "../components/cardForms";
import { InputSubmit, Input } from "../components/input";
import aboutImage from "../assets/aboutImage.png";
import inventoryImage from "../assets/inventoryImage.png";
import rhImage from "../assets/rhImage.png";
import financeImage from "../assets/fincanceImage.png";
import logisticsImage from "../assets/logisticsImage.png";

export function InfoPage() {
    return (
        <div>
        <Section id="Home" img={background}>
            <Navbar>
            <Logo />
            <NavLink link="#Home" text="Home" color="#fff" />
            <NavLink link="#About" text="About" color="#fff" />
            <NavLink link="#Services" text="Services" color="#fff" />
            <NavLink link="#Login" text="Start Now" color="#FBBF24" />
            </Navbar>

            <div className="main__container">
            <Title text={Texts.homeTiitle} />
            <Subtitle text='"Management that shines in every area"' />
            <a href="#About">
                <button className="main__button">
                <i className="fa-solid fa-arrow-down"></i>
                </button>
            </a>
            </div>
        </Section>

        <Section id="About" theme="linear-gradient(#fff 90%, #2e2e2e 90%, #2e2e2e 100%)">
            <div className="about__container">
            <Subtitle text="About us" />
            <Card>
                <TextContainer>
                <Subtitle text="What is GEMA?" />
                <Paragraph text={Texts.textAbout} />
                </TextContainer>

                <Image image={aboutImage} size='100%' />
            </Card>
            </div>
        </Section>

        <Section id="Services" theme="#2e2e2e">
            <div className="services__container">
            <Subtitle color="#fff" text="Services" />
            <div className="container__cards">
                <Card>
                <Image image={inventoryImage} size='100%' />
                <TextContainer>
                    <Subtitle text="Inventory" />
                    <Paragraph text={Texts.textAbout} />
                </TextContainer>
                </Card>

                <Card>
                <TextContainer>
                    <Subtitle text="Finance" />
                    <Paragraph text={Texts.textAbout} />
                </TextContainer>
                <Image image={financeImage} size='100%' />
                </Card>

                <Card>
                <Image image={rhImage} size='100%' />
                <TextContainer>
                    <Subtitle text="Human Resources" />
                    <Paragraph text={Texts.textAbout} />
                </TextContainer>
                </Card>

                <Card>
                <TextContainer>
                    <Subtitle text="Logistics" />
                    <Paragraph text={Texts.textAbout} />
                </TextContainer>
                <Image image={logisticsImage} size='100%' />
                </Card>
            </div>
            </div>
        </Section>

        <Section
            id="Login"
            theme="linear-gradient(#2e2e2e 8%, #fff 8%, #fff 92%, #fff 8%, #2e2e2e 8%)">
                <div className="login__container">
                    <Subtitle text="It all starts with a step"/>
                    <div className="container__cards">
                        <CardForms action="/main" theme='#f5f5f5'>
                            <Subtitle text="Login" />
                            <Input text="User" type="text" >
                                <i className="fa-solid fa-user"></i>
                            </Input>
                            <Input text="Email" type="email" >
                                <i className="fa-solid fa-envelope"></i>
                            </Input>
                            <Input text="Password" type="password" >
                                <i className="fa-solid fa-lock"></i>
                            </Input>
                            <InputSubmit bg="#3B82F6" color="#fff" text="Login">
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </InputSubmit>
                        </CardForms>

                        <CardForms theme='#2e2e2e'>
                            <Subtitle color="#f5f5f5" text="Register" />
                            <Input color="#fff" text="User" type="text" >
                                <i className="fa-solid fa-user"></i>
                            </Input>
                            <Input color="#fff" text="Email" type="email" >
                                <i className="fa-solid fa-envelope"></i>
                            </Input>
                            <Input color="#fff" text="Password" type="password" >
                                <i className="fa-solid fa-lock"></i>
                            </Input>
                            <Input color="#fff" text="Repeat password" type="password" >
                                <i className="fa-solid fa-key"></i>
                            </Input>
                            <InputSubmit bg="#3B82F6" color="#fff" text="Register">
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </InputSubmit>
                        </CardForms>
                    </div>
                </div>
        </Section>
        </div>
    );
}