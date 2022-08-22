import styled from  'styled-components/native';

export const Container = styled.View`
    padding: 0 15px;
    margin-bottom: 35px;
`;
export const Title = styled.Text`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 10px 0;
`;
export const Banner = styled.Image`
    width: 100%;
    height: 140px;
    border-radius: 8px;
    margin-bottom: 10px;
`;
export const ActionContainer = styled.View`
    height: 45px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const DetailsButton = styled.TouchableOpacity`
    width: 80%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #F9A101;
    border-radius: 10px;
    margin-right: 10px;
`;
export const TextDetailsButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
export const DeleteButton = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #F9A101;
    border-radius: 10px;
`;