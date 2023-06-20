import React from 'react';
import './about.css';
import AboutImg from '../../assets/about.jpg';
import CV from '../../assets/Smith-Cv.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <div className='section__subtitle'>My introduction</div>

      <div className='about__container contaier grid'>
        <img src={AboutImg} alt='' className='about__img' />
        <div className='about__data'>
          <Info></Info>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;
