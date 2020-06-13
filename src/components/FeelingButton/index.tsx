import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import colors from '../../constants/colors';

import { Button, Label } from './styles';

interface FeelingButtonProps{
  onPress:()=>void;
  focused:boolean;
}

const FeelingButton: React.FC<FeelingButtonProps> = ({onPress, focused}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#fff', '#ccc']
            : [colors.primaryColor, colors.primaryColor]
        }
        start={[1, 0.2]}
      >
        <Icon
          name="hand-holding-heart"
          size={30}
          color={focused ? colors.primaryColor : '#fff'}
        />
        <Label focused={focused}>Ajuda</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}

export default FeelingButton;