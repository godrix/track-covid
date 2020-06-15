import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import RNMap, {Marker} from 'react-native-maps';

interface ItemProps{
    selected?:boolean;
}
export const Container = styled.SafeAreaView`
   flex: 1;
`;

export const Title = styled.Text`
 font-size: 20px;
 /* font-family: 'Ubuntu_700Bold'; */
margin-top: 24px;
`;
export const Description = styled.Text`
 /* color: ${colors.paragraph}; */
 font-size: 16px;
    margin-top: 4px;
    /* font-family: 'Roboto_400Regular'; */
`;
export const MapContainer = styled.View`
 flex: 1;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 16px;
`;

export const HeaderButton = styled.View`
flex-direction:row;
justify-content:space-between;
`;

export const MapView = styled(RNMap)`
width:100%;
height:100%;
`;
export const MapMarker = styled(Marker)`
width: 90px;
    height: 80px; 
`;
export const MapMarkerContainer = styled.View`
 width: 120px;
 height: 70px;
 
 flex-direction: row;
 align-items: center;
`;

export const MapMarkerContainerCount = styled.View`
 width: 50px;
 height: 50px;
 border-radius:5px;
 background: #e74c3c;
 align-items:center;
 justify-content:center;
`;

export const MapMarkerCount = styled.Text`
    font-size:26px;
    font-weight:800;
    color:#fff;
`;
 
export const MapMarkerContainerTitle = styled.View`
width: 100%;
 height: 50%;
 background: #e74c3c;
 border-top-right-radius:5px;
 border-bottom-right-radius:5px;
 align-items:center;
 justify-content:center;
`;

export const MapMarkerTitle = styled.Text`
font-size:18px;
font-weight:600;
color:#fff;
`;

export const ItemsContainer = styled.View`
 flex-direction: row;
    margin-top: 16px;
    margin-bottom: 32px;
`;

export const SelectedItem = styled.View`
 border-color: ${colors.primaryColor};
    border-width: 2px;
`;
export const ItemTitle = styled.Text`
 /* font-family: 'Roboto_400Regular'; */
    text-align: center;
    font-size: 13px;
`;