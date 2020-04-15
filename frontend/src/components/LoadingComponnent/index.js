import React from "react";
import Lottie from "react-lottie";
import TextyAnim from "rc-texty";

import * as heroData from "../../assets/heroAnimation.json";
import * as loadingData from "../../assets/loadingAnimation.json";

import {
  Container,
  LoadingText,
  AnimationHero,
  AnimationLoading,
} from "./styles";

export default function LoadingComponnent() {
  const animatedHeroOptions = {
    loop: true,
    autoplay: true,
    animationData: heroData.default,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animatedLoadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
  };

  return (
    <Container>
      <AnimationHero>
        <Lottie options={animatedHeroOptions} height={300} width={350} />
      </AnimationHero>
      <AnimationLoading>
        <Lottie options={animatedLoadingOptions} height={200} width={350} />
      </AnimationLoading>
      <LoadingText>
        <TextyAnim type="mask-top">CARREGANDO</TextyAnim>
      </LoadingText>
    </Container>
  );
}
