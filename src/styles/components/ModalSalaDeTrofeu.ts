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
  background-color: #FFF;
  color: black;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const HeaderModal = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  color: #2A4A01;
  h3 {
  font-weight: bold;
  font-size: 32px;
}
`;

export const ButtonBackPlayer = styled.button`
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

export const Prateleira = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom:20px;
  background:
    linear-gradient(
      #673A1B 0%,#845630 5%,#7E4D27 10%,#B1763C 15%,#54341C 20%,
      #673A1B 25%,#845630 30%,#7E4D27 35%,#B1763C 40%,#54341C 46%,
      #673A1B 51%,#845630 56%,#7E4D27 61%,#B1763C 67%,#54341C 73%,
      #673A1B 78%,#845630 85%,#7E4D27 89%,#B1763C 94%,#54341C 100%
    )
    no-repeat;
    img {
  margin: 20px;
  margin-bottom: 0px;
  padding: 5px;
  width: 160px;
  height: 240px;
  border-radius: 20px;
  border-bottom: 20px solid #4c2601;
}
`;