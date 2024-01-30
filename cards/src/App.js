import "bulma/css/bulma.css";
import "./App.css";
import { Course } from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-small is-primary">
        <div style={{ textAlign: "center" }} className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
            <div className="column">
              <Course
                image={Ccsharp}
                title="Komple Web"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="Frontend"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
