import styled from 'styled-components';

export const ContainerModal = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Modal = styled.div`
display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #000;
  color: black;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 3px 6px #000, 0 3px 6px #000;
`;

export const HeaderModal = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  color: #FFF;
  h3 {
  font-weight: bold;
  font-size: 32px;
}
`;

export const ButtonBackPlayer = styled.button`
  cursor: pointer;
    padding: 10px 20px;
    background: red;
    color:  #fff;
    font-weight: bold;
    border: 4px solid red;
    border-radius: 10px;
    transition: 0.5s;
    :hover {
      box-shadow: 0 3px 6px rgb(243, 86, 86), 0 3px 6px rgb(243, 86, 86),
      0 3px 6px rgb(243, 86, 86), 0 3px 6px rgb(243, 86, 86);
  }
`;

export const PlacaDourada = styled.div`
width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

export const ButtonTrophyTwo = styled.button`
  cursor: pointer;
    padding: 10px 20px;
    background: yellow;
    color:  #000;
    font-weight: bold;
    font-size: 22px;
    border-radius: 30px;
    transition: 0.5s;
    :hover {
      box-shadow: 0 3px 6px yellow, 0 3px 6px yellow,
      0 3px 6px yellow, 0 3px 6px yellow;
  }
`;

export const Prateleira = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom:20px;
    img {
      margin: 20px;
      margin-bottom: 0px;
      padding: 5px;
      width: 160px;
      height: 220px;
      border-radius: 20px;
      border-bottom: 20px solid #222;
      box-shadow: 0 3px 6px #FFF, 0 3px 6px #FFF;
      background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    }
`;