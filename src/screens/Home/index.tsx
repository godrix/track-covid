import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native'

import Card from '../../components/Card';
import api from '../../services/api';

import { Container } from './styles';

interface ResponseData {
  quantidade: number
  tipo : string;
}

const Home: React.FC = () => {
  const [amount, setAmount] = useState<ResponseData[]>([]);

  useEffect(()=> {
      (async ()=>{
        const response = await api.get('/api/map/full');
        const {data:{quantidade}} = response.data;

        setAmount(quantidade);
      })()
    },[]);

  return (
  <Container>
    <FlatList
      data={amount}
      renderItem={({item})=>(<Card data={item}/>)}
     keyExtractor={item=> item.tipo}
     numColumns={2}
    />
  </Container>
  );
}

export default Home;