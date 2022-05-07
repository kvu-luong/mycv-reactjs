function Skill() {
  return (
    <section id="skill">
      <div className="row layout-timeline">
        <div className="timeline__title"></div>
        <div className="timeline__contain">
          <h3>SKILLS</h3>
        </div>
      </div>
      <div className="row layout-timeline">
        <div className="timeline__point"></div>
        <div className="timeline__contain">
          <h4>CODING SKILLS</h4>
          <div className="timeline__detail">
            <ul className="list-skill">
              <li>
                <i className="fas fa-pen-nib"></i>JAVASCRIPT
              </li>
              <li>
                <i className="fas fa-pen-nib"></i>SASS
              </li>
              <li>
                <i className="fas fa-pen-nib"></i>REACTJS
              </li>
              <li className="list-skill__backend">
                <i className="fas fa-pen-nib"></i>PHP
              </li>
              <li className="list-skill__backend">
                <i className="fas fa-pen-nib"></i>WORDPRESS
              </li>
              <li className="list-skill__backend">
                <i className="fas fa-pen-nib"></i>CODEIGNITER
              </li>
              <li className="list-skill__backend">
                <i className="fas fa-pen-nib"></i>NODEJS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
