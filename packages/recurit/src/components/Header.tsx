import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.header`
  height: 70vh;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: #000457;
  font-size: 2.8rem;
  font-weight: 700;
`;

const Separator = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  height: 10px;
  width: 80px;
  background-color: #000457;
`;

const Description = styled.p`
  color: #343887;
  font-weight: 600;
`;

type HeaderProps = {
  onClick?: () => void,
};

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <Container>
      <Title>
        INU와 함께
        <br />
        새로운 역사를
        <br />
        만들어 나갈 사람을
        <br />
        찾습니다.
      </Title>
      <Separator />
      <Description>
        2020년, 처음으로 시작합니다.
        <br />
        디미고에서의 시간을 누구보다 부지런하고 의미있게 보내고 싶은 사람을 원합니다.
      </Description>
      <Button onClick={onClick}>
        지원하기
      </Button>
    </Container>
  );
};

export default Header;
