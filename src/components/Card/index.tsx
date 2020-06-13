import React from 'react';
import { View } from 'react-native';

import {} from 'expo'

import { Container, Title, Value, Box, Icon } from './styles';
import colors from '../../constants/colors';

interface CardProps {
  data:{
    tipo:string;
    quantidade:number;
  }
}

const Card: React.FC<CardProps> = ({data}) => {
  let icon = '';
  let tipo = '';

  switch (data.tipo) {
      case 'Recuperado':
      icon = 'smile-beam';
      tipo = 'Recuperado'
      break;
      case 'Não detectável (negativo)':
        icon = 'minus-circle';
        tipo = 'Não detectável'
      break;
      case 'Tratamento Uti':
        icon = 'hospital-alt';
        tipo = 'Tratamento Uti'
      break;
      case 'Tratamento Monitoramento domiciliar':
        icon = 'home';
        tipo='Tratamento domiciliar'
      break;
      case 'Tratamento Enfermaria':
        icon = 'clinic-medical';
        tipo = 'Tratamento Enfermaria'
      break;
      case 'Positivo':
        icon = 'book-medical';
        tipo = 'Positivo'
        break;
    default:
      break;
  }

  return (
    <Container>
      <Icon name={icon} size={40} />
      <Box>
      <Value>
        {data.quantidade}
      </Value>
      <Title>
        {tipo}
      </Title>
      </Box>
  </Container>
  );
}

export default Card;