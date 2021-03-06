/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Transition } from 'react-spring/dist/web';
import { SocialIcon } from 'react-social-icons';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpg';
import android from '../images/android.svg';
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-4xl lg:text-5xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-xl lg:text-3xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const SocialWrapper = styled.div`
  ${tw('fixed pin-r w-16 z-10 md:mr-6 opacity-50')};
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const ButtonOutlinedBlue = styled.button`
  ${tw(
    'bg-transparent hover:bg-blue-dark text-blue-dark font-semibold text-lg hover:text-white py-3 px-6 border-2 border-blue-dark hover:border-transparent rounded-full cursor-pointer'
  )};
`;

const ButtonOutlinedOrange = styled.button`
  ${tw(
    'bg-transparent hover:bg-orange-dark text-orange-dark font-semibold text-lg hover:text-white py-3 px-6 border-2 border-orange-dark hover:border-transparent rounded-full cursor-pointer'
  )};
`;

const Image = styled.img`
  ${tw('w-12 xl:w-18 h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const socialIconStyle = {
  marginBottom: '0.5rem',
};
const socialIconFirstStyle = {
  marginBottom: '0.5rem',
  marginTop: '1.25rem',
};

const Index = () => (
  <React.Fragment>
    <SEO />
    <SocialWrapper>
      <SocialIcon style={socialIconFirstStyle} url="https://github.com/neone35/" />
      <SocialIcon style={socialIconStyle} url="https://www.behance.net/neleon" />
      <SocialIcon style={socialIconStyle} url="https://www.linkedin.com/in/neomaslov/" />
      <SocialIcon style={socialIconStyle} url="https://www.facebook.com/artur.maslov" />
      <SocialIcon style={socialIconStyle} url="https://twitter.com/neonartur" />
    </SocialWrapper>
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
        {/* <SVG icon="circle" width={64} fill={colors.green} left="95%" top="15%" /> */}
        <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hi, I'm
            <TypistLoop interval={1500}>
              {['Artur Maslov', 'Web developer', 'Android developer'].map(text => (
                <Typist key={text} startDelay={100}>
                  {text}
                </Typist>
              ))}
            </TypistLoop>
          </BigTitle>
          <Subtitle>Scroll down to find out more.</Subtitle>
          <div>
            <form
              style={{ display: 'inline', marginRight: '10px'}}
              action="https://drive.google.com/file/d/1xSJ0pVi3kk_mozaexTrUvY09X7rS3QaJ/view?usp=sharing"
            >
              <ButtonOutlinedBlue type="submit">Detailed CV</ButtonOutlinedBlue>
            </form>
            <form
              style={{ display: 'inline' }}
              action="https://drive.google.com/file/d/12EOh4LaIgndtEr8x3ZyQsS6kB1mKW_wm/view?usp=sharing"
            >
              <ButtonOutlinedOrange type="submit">One page CV</ButtonOutlinedOrange>
            </form>
          </div>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={0.5}
        factor={2}
      />
      <Content speed={0.4} offset={0.9} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Rearn"
              link="https://github.com/neone35/rearn"
              bg="linear-gradient(to right, #00BCD4 0%, #2196F3 100%)"
              tech="React &#9656; NextJS &#9656; PassportJS &#9656; Mongo &#9656; Bootstrap"
            >
              Flashcard PWA application built with MERN stack (bachelor thesis project)
            </ProjectCard>
            <ProjectCard
              title="Enalyzer"
              link="https://github.com/neone35/enalyzer"
              bg="linear-gradient(to right, #4CAF50 0%, #8BC34A 100%)"
              tech="Firebase MLkit &#9656; Architecture components &#9656; Camera API &#9656; Material design"
            >
              Easily recognize food additive codes in real time using phone camera
            </ProjectCard>
            <ProjectCard
              title="Geowords"
              link="https://github.com/neone35/geowords"
              bg="linear-gradient(to right, #4CAF50 0%, #8BC34A 100%)"
              tech="MVP &#9656; RxJava &#9656; Google Maps &#9656; Parceler"
            >
              Allows to associate user input with markers on the map
            </ProjectCard>
            <ProjectCard
              title="Chargent"
              link="https://github.com/neone35/chargent"
              bg="linear-gradient(to right, #4CAF50 0%, #8BC34A 100%)"
              tech="MVVM &#9656; RxJava &#9656; Custom views"
            >
              Lithuanian electric car rent service "Spark" application alternative implementation
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.teal} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
          <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="Artur Maslov" />
            <AboutSub>
              Passion in coding and cycling. <br /> Working hard, dreaming big. <br /> Doing what is right, not what is
              easy.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            I am a highly motivated person. My idol is Elon Musk. He is exceptionally straightforward and never gives
            up. I have a high pain threshold to solve important problems. During my childhood I solved problems with
            lego bricks and drew lots of mechanical creations. My language skills include Russian, Polish, Lithuanian,
            English. This helps me consume information from multiple sources. I love to help people solve their problems
            in IT and make the world step forward faster towards a brighter future. I took courses about the human
            brain, neural links, which helps me learn in the most effective way. I am an active person – I ride my
            bicycle every day, try to walk more than 5km per day and take frequent breaks while developing. You can find
            out more <b>&#9660;</b> or download my CV <b>&#9650;</b>.
          </AboutDesc>
        </Inner>
      </Content>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Contact me</Title>
          <ContactText>
            Write a letter at <a href="mailto:aartasas@gmail.com">Gmail</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Artur Maslov with <a href="https://www.gatsbyjs.org/">Gatsby</a>.
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
