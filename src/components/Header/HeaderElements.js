import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  // background: #DDF8FF;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem calc((100vw - 1200px) / 2);
  z-index: 10;
  margin: 0px 70px;
  border-radius: 10px;
`;

export const MiniBox = styled.section`
  // padding: 4em;
  background: #F5F5F5;
  width: 40%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem calc((100vw - 1200px) / 2);
  z-index: 10;
  margin: 5px;
  border-radius: 10px;
`;

export const HeroH1 = styled.h1`
  font-size: 45px;
  margin-bottom: 1rem;
  color: #256ce1;

`;

export const HeroP = styled.p`
  font-size: 15px;
  margin-bottom: 2rem;
  line-height: 2.5`
;

export const HeroBtn = styled.button`
  font-size: 1.2rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 4px;
  background: #256ce1;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    opacity: 0.5;
    color: #fff;
  }
`;