import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface LabelProps {
  focused?:boolean;
}

export const Button = styled(LinearGradient)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-bottom:15px;
`;

export const Label = styled.Text<LabelProps>`
  font-size: 12px;
  color: ${({ focused }) => focused ? '#000' : '#fff'};
`;