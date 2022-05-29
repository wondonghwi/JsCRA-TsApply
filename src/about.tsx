import React from 'react';
import InnerComponent from 'components/InnerComponent';

interface AboutType {
  hi: string;
  bye: string;
}

const About = ({ hi, bye }: AboutType) => {
  return (
    <>
      <div>{hi}</div>
      <div>{bye}</div>
      <InnerComponent />
    </>
  );
};

export default About;
