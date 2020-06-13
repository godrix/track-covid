import styled from 'styled-components/native';
import colors from '../../constants/colors';

import {Animated} from 'react-native'

import assets from '../../constants/assets';

export const Container = styled(Animated.View)`
  background:${colors.tintColor};
  width:100%;
  min-height:60px;
  align-items:flex-end;
  flex-direction:row;
`;

export const Content = styled.View`
height:60px;
width:100%;
justify-content:center;

`;

export const Title = styled.Text`
  color:#000;
  margin-left:18px;
  font-size:18px;
  font-family: 'Oswald_400Regular';
`;

export const Description = styled.Text`
margin-left:18px;
 

`;