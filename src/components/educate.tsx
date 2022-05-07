function Education(){
    return (
        <section id="education">
        <div className="row layout-timeline">
          <div className="timeline__title"></div>
          <div className="timeline__contain">
            <h3>EDUCATION</h3>
          </div>
        </div>
        <div className="row layout-timeline">
          <div className="timeline__education"></div>
          <div className="timeline__contain">
            <h4>COMPUTER SCIENCE</h4>
            <div className="timeline__detail">
              <h5><i className="fas fa-university"></i> International University HCM - <span>Graduation May 2018</span></h5>
              <ul className="list-edu">
                <li>
                  <i className="fas fa-asterisk"></i>
                  <p>Major: Computer Science</p></li>
                <li>
                  <i className="fas fa-asterisk"></i>
                  <p>GPA: 72 /100</p></li>
                <li>
                  <i className="fas fa-asterisk"></i>
                  <p>Main courses: Algoriths, Database, Programing language</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Education;