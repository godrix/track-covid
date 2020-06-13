import React, {useEffect, useState} from 'react';
//import {  } from 'react-native';

import { Container, Content, Title, Description } from './styles';

interface HeaderProps{
  styles:object
}

const Header: React.FC<HeaderProps> = ({styles}) => {

  return (
    <Container style={styles}>
      <Content>
        <Title>
          AUTOPROTEÇÃO SOCIAL
        </Title>
        <Description>
          Detalhes menor para conteudo
        </Description>
      </Content>
    </Container>
  )
}

export default Header;