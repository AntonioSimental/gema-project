import React from "react";
import { Section } from "../components/section";
import { Navbar } from "../components/navbar";
import { NavButton } from "../components/navButton";
import { Logo } from "../components/navbarLogo";
import { Card } from "../components/card";
import { Image } from "../components/imageContainer";
import { TextContainer } from "../components/textContainer";
import { Subtitle } from "../components/subtitle";
import { Paragraph } from "../components/paragraph";
import '../stylesheets/mainPage.css';
import inventory from '../assets/inventoryMain.png'
import finance from '../assets/financeMain.png'
import rh from '../assets/rhMain.png'
// import logistics from '../assets/logisticsMain.png'

export function Main () {
    return (
        <Section theme="linear-gradient(#2e2e2e 8%, #fff 8%, #fff 92%, #fff 8%, #2e2e2e 8%)">
            <Navbar >
                <Logo />
                <NavButton text='Home' color='#f5f5f5' />
                <NavButton link="/shop" text='Shop' color='#f5f5f5' />
                <NavButton text='Options' color='#f5f5f5' />
                <NavButton link="/" text='Log Out' color='#ef4444' />
            </Navbar>
            <div className="mainPage__container">
                <div className="card_container">
                    <Card>
                        <Image image={inventory} size='60%' />
                        <TextContainer>
                            <Subtitle text='Inventory' />
                            <Paragraph/>
                        </TextContainer>
                    </Card>

                    <Card>
                        <Image image={finance} size='60%' />
                        <TextContainer>
                            <Subtitle text='Finance' />
                            <Paragraph/>
                        </TextContainer>
                    </Card>

                    <Card>
                        <Image image={rh} size='60%' />
                        <TextContainer>
                            <Subtitle text='Human Resources' />
                            <Paragraph/>
                        </TextContainer>
                    </Card>

                    <Card>
                        <Image image={rh} size='60%' />
                        <TextContainer>
                            <Subtitle text='Logistics' />
                            <Paragraph/>
                        </TextContainer>
                    </Card>
                </div>
            </div>
        </Section>
    )
}