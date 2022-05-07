function Profile(){
    return (
        <section id="profile">
        <div className="row layout-timeline">
          <div className="timeline__title"></div>
          <div className="timeline__contain">
            <h3>PROFILE</h3>
          </div>
        </div>
        <div className="row layout-timeline">
          <div className="timeline__point"></div>
          <div className="timeline__contain">
            <div>
              <h4 className="border--blue">FULL NAME</h4>
              <div className="timeline__detail">
                <p>Luong Khanh Vu</p>
              </div>
            </div>

            <div>
              <h4 className="border--blue">BORN</h4>
              <div className="timeline__detail">
                <p>25 Aug 1996 - Binh Dinh, Vietnam</p>
              </div>
            </div>

            <div>
              <h4 className="border--blue">EMAIL</h4>
              <div className="timeline__detail">
                <p>luongkhanhvu1392@gmail.com</p>
              </div>
            </div>

            <div>
              <h4 className="border--blue">ADDRESS</h4>
              <div className="timeline__detail">
                <p>42/26A Ung Van Khiem Str. Ward 15, Binh Thanh Dict. HCM city</p>
              </div>
            </div>

            <div>
              <h4 className="border--blue">FIND ME ON</h4>
              <div className="timeline__detail">
                <ul className="timeline__icon">
                  <li><a href="#true"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#true"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#true"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    );
}

export default Profile;