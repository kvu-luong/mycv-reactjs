import styled from 'styled-components';

function Intro() {
  return (
    <IntroSection id="intro" className="layout mx">
      <div className="intro-avatar">
        {/* <img src="./img/khanhvu_webdeveloper.JPEG" alt="khanhvu"> */}
      </div>
      <div className="intro-text ml-30">
        <div className="intro-title">
          <h1>
            Hi, I'm <span className="color-green"> Khánh Vũ </span>
          </h1>
        </div>
        <div className="intro-job">
          <h2>Web Developer</h2>
        </div>
        <div className="intro-desc">
          <p>
            What I want to achieve is mastery of web development skills. Trying to learn everything
            there is to know about web development such as user experiences, algorithms, and system
            design. Having adequate qualifications to create and maintain websites that allow people
            all over the world to utilize them quickly and efficiently.
          </p>
        </div>
      </div>
    </IntroSection>
  );
}

const IntroSection = styled.section`
    font-family: etLine, Lusitana, serif;
    background-color: black;
    color: white;
`;
export default Intro;
