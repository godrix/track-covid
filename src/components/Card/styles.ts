import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import layout from '../../constants/layout';
import colors from '../../constants/colors';



export const Container = styled.View`
  width: ${(layout.windowWidth / 2) - 30 }px;
  height: ${(layout.windowWidth / 2) - 30 }px; 

  background:${colors.inactiveTintColor};
  margin:5px;
  opacity:0.9;
  border-radius:5px;
  justify-content:space-around;
`;

export const Box = styled.View`

`;

export const Icon = styled(FontAwesome5)`
margin-left:15px;
`;

export const Title = styled.Text`
font-size:18px;
padding:0;
margin-left:10px;
`;

export const Value = styled.Text`
font-size:50px;
text-align:center;
font-weight:bold;
`;