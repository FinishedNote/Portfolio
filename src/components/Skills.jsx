import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import sassIcon from "../assets/sass.png";
import tailwindIcon from "../assets/tailwind.png";
import jslIcon from "../assets/js.png";
import tslIcon from "../assets/ts.png";
import reactIcon from "../assets/react.png";
import reduxIcon from "../assets/redux.png";
import nextIcon from "../assets/next.png";
import svelteIcon from "../assets/svelte.png";
import viewIcon from "../assets/view.png";
import nodeIcon from "../assets/node.png";
import djangoIcon from "../assets/django.png";
import postmanIcon from "../assets/postman.png";
import mongodbIcon from "../assets/mongodb.png";
import supabaseIcon from "../assets/supabase.png";
import firebaseIcon from "../assets/firebase.png";
import pythonIcon from "../assets/python.png";
import bashIcon from "../assets/bash.png";
import flutterIcon from "../assets/flutter.png";
import linuxIcon from "../assets/linux.png";
import vercelIcon from "../assets/vercel.png";
import gitIcon from "../assets/git.png";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="title">
        <h2>Mes compétences</h2>
      </div>
      <div className="skills">
        <div className="skill-box">
          <div className="title">
            <h3>Frontend</h3>
          </div>
          <ul className="icons">
            <li>
              <img src={htmlIcon} alt="html icon" />
            </li>
            <li>
              <img src={cssIcon} alt="css icon" />
            </li>
            <li>
              <img src={sassIcon} alt="sass icon" />
            </li>
            <li>
              <img src={tailwindIcon} alt="tailwind icon" />
            </li>
            <li>
              <img src={jslIcon} alt="js icon" />
            </li>
            <li>
              <img src={tslIcon} alt="ts icon" />
            </li>
            <li className="react">
              <img src={reactIcon} alt="react icon" />
            </li>
            <li>
              <img src={reduxIcon} alt="redux icon" />
            </li>
            <li>
              <img src={nextIcon} alt="next icon" />
            </li>
            <li>
              <img src={svelteIcon} alt="svelte icon" />
            </li>
            <li>
              <img src={viewIcon} alt="view icon" />
            </li>
          </ul>
        </div>
        <div className="skill-box">
          <div className="title">
            <h3>Backend</h3>
          </div>
          <ul className="icons">
            <li>
              <img src={nodeIcon} alt="node icon" />
            </li>
            <li>
              <img src={djangoIcon} alt="django icon" />
            </li>
            <li>
              <img src={postmanIcon} alt="postman icon" />
            </li>
            <li>
              <img src={mongodbIcon} alt="mongodb icon" />
            </li>
            <li>
              <img src={supabaseIcon} alt="supabase icon" />
            </li>
            <li>
              <img src={firebaseIcon} alt="firebase icon" />
            </li>
          </ul>
        </div>
        <div className="skill-box">
          <div className="title">
            <h3>Autres</h3>
          </div>
          <ul className="icons">
            <li>
              <img src={pythonIcon} alt="python icon" />
            </li>
            <li>
              <img src={bashIcon} alt="bash icon" />
            </li>
            <li>
              <img src={flutterIcon} alt="flutter icon" />
            </li>
            <li>
              <img src={linuxIcon} alt="linux icon" />
            </li>
            <li>
              <img src={vercelIcon} alt="vercel icon" />
            </li>
            <li>
              <img src={gitIcon} alt="git icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
