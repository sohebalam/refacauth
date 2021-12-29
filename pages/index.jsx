import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
// import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1>
          <span>Next.js</span>
          <span>App</span>
        </h1>
        <Container justifyContent="center"></Container>
      </div>
    </Wrapper>
  );
};

export default Hero;
