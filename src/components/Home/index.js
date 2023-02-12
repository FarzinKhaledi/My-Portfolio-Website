import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import './index.scss';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['a', 'r', 'z', 'i', 'n'];
  const jobArray1 = [
    'F',
    'u',
    'l',
    'l',
    '-',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
   
  ];
  const jobArray2 = [ 'w',
  'e',
  'b',' ','d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray1}
              idx={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={10}
            />
          </h1>
          <h2>React Developer / JavaScript Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
