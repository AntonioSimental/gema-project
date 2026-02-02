import React from "react";
import '../stylesheets/shopPage.css';
import { Section } from "../components/section";
import { NavButton } from "../components/navButton";
import { CardForms } from "../components/cardForms";
import { Card } from "../components/card";
import { TextContainer } from "../components/textContainer";
import { Paragraph } from "../components/paragraph";
import { Image } from "../components/imageContainer";
import inventory from '../assets/inventoryMain.png'
import { Subtitle } from "../components/subtitle";
import finance from '../assets/financeMain.png'
import rh from '../assets/rhMain.png'


export function Shop () {
    return (
        <Section theme="linear-gradient(#2e2e2e 8%, #fff 8%, #fff 92%, #fff 8%, #2e2e2e 8%)">
            <div className="shop__container">
                <div className="container__cards">
                    <CardForms theme="#2e2e2e" >
                        <Card></Card>
                        <Card>
                            <i className="fa-solid fa-circle-plus"></i>
                            <TextContainer>
                                <Paragraph text="Inventory" />
                            </TextContainer>
                            <Image image={inventory} />
                        </Card>

                        <Card>
                            <i className="fa-solid fa-circle-plus"></i>
                            <TextContainer>
                                <Paragraph text="Finance" />
                            </TextContainer>
                            <Image image={finance} />
                        </Card>

                        <Card>
                            <i className="fa-solid fa-circle-plus"></i>
                            <TextContainer>
                                <Paragraph text="Human Resources" />
                            </TextContainer>
                            <Image image={rh} />
                        </Card>

                        <Card>
                            <i className="fa-solid fa-circle-plus"></i>
                            <TextContainer>
                                <Paragraph text="Finance" />
                            </TextContainer>
                            <Image image={inventory} />
                        </Card>
                    </CardForms>
                    
                    <CardForms theme="#d9d9d9" >
                        <Subtitle text="SHOPPING CART" />
                        <TextContainer>
                            <Paragraph text="Add a service..." />
                        </TextContainer>
                    </CardForms>
                </div>
                <NavButton link="/main" text="Cancel" color="#EF4444" />
            </div>
        </Section>
    )
}