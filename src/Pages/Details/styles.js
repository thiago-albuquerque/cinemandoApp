import styled from'styled-components/native';

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
`;
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 30px;
    z-index: 2;
    padding: 0 22px;
`;
export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 25px;
`;
export const Banner = styled.Image`
    width: 90%;
    height: 45%;
    margin: 0 auto;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;
export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    padding: 5px 15px;
`;
export const RateContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`;
export const Rate = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;
export const ListOfGenres = styled.FlatList`
    max-height: 35px;
    min-height: 35px;
    padding: 0 0 0 15px;
    margin: 10px 0;
`;
export const Info = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    padding: 0 15px;
    margin-bottom: 10px;
`;
export const Description = styled.Text`
    color: #fff;
    text-align: justify;
    line-height: 20px;
    padding: 0 15px 30px 15px;
`;