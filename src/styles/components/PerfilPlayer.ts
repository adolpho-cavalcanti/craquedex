import styled from 'styled-components';

export const ContainerPlayer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px;
    @media(max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const PlayerStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: #fff;
    border-radius: 2px;
    height: 320px;
    width: 100%;
    position: relative;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    @media(max-width: 600px) {
        flex-direction: column;
        height: 100%;
    }
`;
export const ImgPlayer = styled.div`
    width: 30%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
    @media(max-width: 600px) {
        width: 100%;
        height: 220px;
    }
`;
export const ContentPlayer = styled.div`
    width: 70%;
    padding: 1rem;
    @media(max-width: 600px) {
        width: 100%;
        padding: 0;
    }
`;
export const ButtonActionsPlayer = styled.div`
    display: flex;
    justify-content: center;
    @media(max-width: 600px) {
        display: flex;
        justify-content: space-between;
        margin: 10px 5px;
    }
`;
export const ButtonTrophy = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    background: #DAA520;
    color:  #000;
    font-weight: bold;
    border-radius: 30px;
    transition: 0.5s;
    :hover {
        box-shadow: 0 3px 6px #000, 0 3px 6px #000,
        0 3px 6px #000, 0 3px 6px #000;
    }
`;
export const ButtonBackHome = styled.button`
    right: 0;
    position: absolute;
    margin-right: 20px;
    cursor: pointer;
    padding: 10px 20px;
    background: #fff;
    color:  red;
    font-weight: bold;
    border: 4px solid red;
    border-radius: 10px;
    transition: 0.5s;
    :hover {
        background: red;
        color:  #fff;
        border: 4px solid red;
        box-shadow: 0 3px 6px rgb(243, 86, 86), 0 3px 6px rgb(243, 86, 86),
        0 3px 6px rgb(243, 86, 86), 0 3px 6px rgb(243, 86, 86);
        transition: 0.5s;
    }
    @media(max-width: 600px) {
        padding: 5px 10px;
        margin-right: 5px;
    }
`;
export const DataPlayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    span {
        margin: 5px;
        border: 1px solid;
        padding: 5px;
        border-radius: 5px;
    }
    span:hover {
        background: #DAA520;
        transition: 0.5s;
        border: 1px solid #000;
    }
    div {
        margin: 5px;
        border: 1px solid;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
        span {
            border: none;
        }
    }
    div:hover {
        background: #DAA520;
        transition: 0.5s;
        border: 1px solid #000;
    }
`;
