import styled from 'styled-components/native';

export const LoadingContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #2E434E;
    padding: 4px 0;
`;
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #2E434E;
    padding: 4px 0;
`;
export const SearchContainer = styled.View`
    width: 100%;
    height: 45px;
    flex-direction: row;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 8px;
`;
export const Input = styled.TextInput`
    width: 85%;
    height: 100%;
    font-size: 16px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50px;
    padding: 8px 15px;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    font-size: 26px;
    color: #F9A101;
    padding: 20px 15px 8px 15px;
`;
export const BannerButton = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
`;
export const Banner = styled.Image`
    width: 100%;
    height: 150px;
    border-radius: 10px;
`;
export const TitleBanner = styled.Text`
    width: 100%;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    position: absolute;
    padding: 0 5px;
    text-shadow: 0 0 15px rgba(0, 0, 0, 1);
`;
export const SliderMovie = styled.FlatList`
    height: 250px;
    padding: 0 15px;
`;