function Work() {
  return (
    <section id="work">
      <div className="row layout-timeline">
        <div className="timeline__title"></div>
        <div className="timeline__contain">
          <h3>WORK EXPERIENCE</h3>
        </div>
      </div>
      <div className="row layout-timeline">
        <div className="timeline__work"></div>
        <div className="timeline__contain">
          <h4>NTT NETWORK</h4>
          <div className="timeline__detail">
            <h5>
              <i className="fas fa-laptop-code"></i> Fullstack - <span>March 2019 - Current</span>
            </h5>
            <ul className="list-work">
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>
                    Using Socket.io and Express.js to manage a concurrent project called 'Autocall'
                    in order to increase max call of asterisk system
                  </p>
                </div>
                <div>
                  <span className="bg--black">EXPRESS.JS</span>
                  <span className="bg--green">NODEJS</span>
                  <span className="bg--title">SOCKET.IO</span>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>
                    Using Javascript, improve the company's websites's search tool to make it faster
                    and smoother
                  </p>
                </div>
                <div>
                  <span className="bg--grey">JAVASCRIPT</span>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>
                    Creating a rest api to deliver messges via Brandname channel and Zalo channel,
                    as well as mail using the curl library.
                  </p>
                </div>
                <div>
                  <span className="bg--blue">CODEIGNITER</span>
                  <span className="bg--green">NODEJS</span>
                  <span className="bg--title">SOCKET.IO</span>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>
                    Supporting a coworker in improving the performance of a chrome extension using
                    javascript's asynchronous and deep copy object techniques.
                  </p>
                </div>
                <div>
                  <span className="bg--grey">JAVASCRIPT</span>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>
                    Installing and upgrading a new fature for the Nodejs server that uses the
                    express module.
                  </p>
                </div>
                <div>
                  <span className="bg--black">EXPRESS.JS</span>
                  <span className="bg--green">NODEJS</span>
                  <span className="bg--title">SOCKET.IO</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row layout-timeline">
        <div className="timeline__work"></div>
        <div className="timeline__contain">
          <h4>DEVINITION</h4>
          <div className="timeline__detail">
            <h5>
              <i className="fas fa-laptop-code"></i> Trainee -{' '}
              <span>Beginning of 2018 - Junuary 2019</span>
            </h5>
            <ul className="list-work">
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>As a trainee, I am in charge of the front-end field.</p>
                </div>
                <div>
                  <span className="bg--black">HTML</span>
                  <span className="bg--green">CSS</span>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>Combining media queries, CSS, grid, and flex to create a responsive website</p>
                </div>
                <div>
                  <span className="bg--black">HTML</span>
                  <span className="bg--green">CSS</span>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-chess-pawn"></i>
                  <p>Upgrading a wordpress website's client by altering a template and plugin</p>
                </div>
                <div>
                  <span className="bg--lightGreen">WORDPRESS</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
