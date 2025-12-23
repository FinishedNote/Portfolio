import { Element } from "react-scroll"

const Projects = () => {
  return (
    <Element name="section3" className="projects-section">
            <div className="title"> 
                <h2>Mes projets</h2>
            </div>
            <div className="projects-container">
                <div className="project">
                    <h3>Project 1</h3>
                    <p>Description of Project 1.</p>
                </div>
                <div className="project">
                    <h3>Project 2</h3>
                    <p>Description of Project 2.</p>
                </div>
                <div className="project">
                    <h3>Project 3</h3>
                    <p>Description of Project 3.</p>
                </div>
            </div>
    </Element>
  )
}

export default Projects