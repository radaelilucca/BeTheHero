import React from "react";
import { Linking } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  Logo,
  BackButton,
  BackIcon,
  Incident,
  OngProperty,
  PropertyValue,
  ContactBox,
  Title,
  CallToAction,
  Actions,
  ActionButton,
  ButtonText,
} from "./styles";
import logo from "../../assets/logo.png";

export default function Detail() {
  const route = useRoute();
  const incident = route.params.incident;
  const navigation = useNavigation();
  const message = `Olá ${
    incident.ong.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(incident.amount)}! Como devo proceder?!`;

  function navigateToDetail() {
    navigation.navigate("Incidents");
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.ong.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.ong.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} />
        <BackButton onPress={navigateToDetail}>
          <Feather size={28} color={"#e02041"} name={"arrow-left"} />
        </BackButton>
      </Header>

      <Incident>
        <OngProperty>ONG:</OngProperty>
        <PropertyValue>
          {incident.ong.name}, de {incident.ong.city} - {incident.ong.uf}{" "}
        </PropertyValue>
        <OngProperty>CASO:</OngProperty>
        <PropertyValue>{incident.title}</PropertyValue>
        <OngProperty>VALOR</OngProperty>
        <PropertyValue>
          {" "}
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(incident.amount)}{" "}
        </PropertyValue>
      </Incident>

      <ContactBox>
        <Title>Salve o dia!</Title>
        <CallToAction>Entre em contato:</CallToAction>
        <Actions>
          <ActionButton onPress={sendWhatsapp}>
            <ButtonText>WhatsApp</ButtonText>
          </ActionButton>
          <ActionButton onPress={sendMail}>
            <ButtonText>E-mail</ButtonText>
          </ActionButton>
        </Actions>
      </ContactBox>
    </Container>
  );
}
