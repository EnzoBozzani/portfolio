import styles from "./ProjectsSection.module.scss";
import Project from "./Project";

export default function ProjectsSection(){
    return (
        <>
            <p className="display-5 mt-5 mb-5 text-center w-100 main-color" id="pSection">Some Projects</p>
            <div className={`${styles.pSection}`}>
                <Project src="/spacex.png" text="SpaceX" url="https://github.com/EnzoBozzani/spacex"/>
                <Project src="/lp.png" text="Landing Page" url="https://github.com/EnzoBozzani/spacex"/>
                <Project src="/countries.png" text="Countries API" url="https://github.com/EnzoBozzani/spacex"/>
                <Project src="/calc.png" text="Calculator" url="https://github.com/EnzoBozzani/spacex"/>
                <Project src="/github.svg" text="GitHub API" url="https://github.com/EnzoBozzani/spacex"/>
        </div>
        </>
    )
}


//adicionar o link certo para os projetos e foto do GitHub API
//solve responsiveness problem in this area (after 900px, problems appear)