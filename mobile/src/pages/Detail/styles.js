import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  padding-top: ${Constants.statusBarHeight + 20};
  background: #efefef;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;
export const Logo = styled.Image`
  width: 120px;
  height: 40px;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: red;
`;

export const Incident = styled.View`
  background: #fff;
  margin-top: 30px;
  padding: 20px;
`;
export const OngProperty = styled.Text`
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 8px;
  color: #41414d;
`;

export const PropertyValue = styled.Text`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
`;

export const ContactBox = styled.View`
  background: #fff;
  margin-top: 20px;
  padding: 18px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 40px;
  color: #41414d;
`;

export const CallToAction = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const ActionButton = styled.TouchableOpacity`
  background: #e02041;
  height: 50px;
  width: 48%;
  border-radius: 15;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
