import "./styles/App.css"

function App() {
  return (
    <div className="main-container">
      <div className="inner-container"> 
      
        <section className="first-section">
          <div>
            <div className="first-line">
            <p className="floqost-title"> <span className="flo">Flo</span><span className="qast">Qast</span> </p>
            <p className="the-parag"> The </p>
            </div>
            <p className="fastest-most"> Fastest, Most Accurate </p>
            <p className="close-books"> Way to Close Your Books! </p>
          </div>
        </section>

        <section className="second-section">

          <div className="first-section-div">
            <p className="schedule-demo"> SCHEDULE A DEMO </p>
            <p className="learn-more"> Learn More About FloQast </p>
          </div>

          <div className="second-second-div">
            <div className="second-section-first-div">
              <p className="learn-how"> Learn How FloQast Can </p>
              <p className="improve-month"> Improve Your Month-End </p>
            </div>
            <form className="second-section-second-div">
              <input placeholder="First Name*"/>
              <input placeholder="Email*" /> 
              <button> SCHEDULE NOW </button>
          </form>
          </div>

        </section>

      </div>
    </div>
  );
}

export default App;
