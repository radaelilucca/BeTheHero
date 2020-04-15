import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  padding-top: ${Constants.statusBarHeight + 15};
  background: #efefef;
`;

export const LoadingAnimationContainer = styled.View`
  height: 50px;
  width: 100%;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 98%;
  left: 6%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 30px;
`;
export const Logo = styled.Image`
  width: 120px;
  height: 40px;
`;
export const HeaderText = styled.Text`
  font-size: 18px;
  color: #333;
`;
export const CaseCount = styled.Text`
  font-weight: bold;
  color: #e02041;
`;
export const WelcomeText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  line-height: 55px;
  color: #41414d;
`;
export const IntroductionText = styled.Text`
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 30px;
`;

export const IncidentsList = styled.FlatList`
  flex: 1;
`;
export const Incident = styled.View`
  background: #fff;
  margin-top: 22px;
  padding: 20px;
  height: 260px;
`;
export const OngProperty = styled.Text`
  font-size: 20px;
  margin-bottom: 5px;
  margin-top: 5px;
  font-weight: bold;
`;

export const PropertyValue = styled.Text`
  font-size: 16px;
`;
export const DetailsButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;
export const DetailsText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #e02041;
`;
export const DetailsIcon = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 20px;
  color: #e02041;
`;
