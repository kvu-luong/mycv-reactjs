import Contact from './contact';
import Education from './educate';
import End from './end';
import Process from './process';
import Profile from './profile';
import Skill from './skill';
import Work from './work';

function TimeLine() {
  return (
    <div className="timeline bg-icon">
      <Process />
      <Work />
      <Process />
      <Skill />
      <Process />
      <Education />
      <Process />
      <Profile />
      <Process />
      <Contact />
      <Process />
      <End />
    </div>
  );
}

export default TimeLine;
