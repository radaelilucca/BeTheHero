import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import TypingText from "react-native-typing-text";
import FadeInView from "react-native-fade-in-view";

import * as handshake from "../../assets/handshake.json";

import {
  Container,
  ModalLogo,
  ModalQuote,
  ModalCallToAction,
  AnimationContainer,
  LoadingText,
} from "./styles";

import logo from "../../assets/logo.png";

export default function Welcome() {
  const [renderDelay, setRenderDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderDelay(true);
    }, 3000);
  }, []);




  return (
    <Container>
      <ModalLogo source={logo} />
      <LoadingText>Carregando...</LoadingText>
      <AnimationContainer>
        <FadeInView>
          <LottieView
            style={{
              width: 520,
              height: 230,
            }}
            source={handshake}
            autoPlay={true}
            speed={1}
          />
        </FadeInView>
      </AnimationContainer>
      <ModalQuote>
        <TypingText
          text="As grandes oportunidades de ajudar os outros raramente acontecem, mas as
        pequenas surgem todos os dias."
          color="#41414d"
          textSize={24}
          typingAnimationDuration={15}
        />
      </ModalQuote>

      {renderDelay ? (
        <FadeInView duration={1500}>
          <ModalCallToAction>Seja um herói!</ModalCallToAction>
        </FadeInView>
      ) : (
        <ModalCallToAction style={{ color: "#fff" }}>...</ModalCallToAction>
      )}
    </Container>
  );
}
