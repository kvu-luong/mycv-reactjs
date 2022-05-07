function Contact() {
  return (
    <section id="contact">
      <div className="row layout-timeline">
        <div className="timeline__title"></div>
        <div className="timeline__contain">
          <h3>CONTACT</h3>
        </div>
      </div>
      <div className="row layout-timeline">
        <div className="timeline__mail"></div>
        <div className="timeline__contain">
          <h4>SEND ME A MESSAGE</h4>
          <div className="timeline__detail">
            <form>
              <div className="form-field">
                <input type="text" name="name" id="name" className="js-input" />
                <label className="label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="form-field">
                <input type="email" name="email" id="email" className="js-input" />
                <label className="label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="form-field">
                <input type="text" name="subject" id="subject" className="js-input" />
                <label className="label" htmlFor="subject">
                  Subject
                </label>
              </div>
              <div className="form-field">
                <textarea name="message" id="message" className="js-input"></textarea>
                <label className="label" htmlFor="message">
                  Message
                </label>
              </div>
              <div className="form-field align-center">
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
