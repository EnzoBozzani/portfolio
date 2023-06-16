import styles from "./ProjectsSection.module.scss";

export default function ProjectsSection(){
    return (
        <>
            <p className="display-5 mt-5 mb-5 text-center w-100 main-color" id="pSection">Some Projects</p>
            <div className={`${styles.pSection}`}>
            
                <div
                    style={{backgroundImage: "url('/spacex.png')"}}><span>SpaceX</span></div>
                <div
                    style={{backgroundImage: "url('/lp.png')"}}><span>Landing Page</span></div>
                <div
                    style={{backgroundImage: "url('/countries.png')"}}><span>Countries API</span></div>
                <div
                    style={{backgroundImage: "url('/calc.png')"}}><span>Calculator</span></div>
                <div
                    style={{backgroundImage: "url('/ts-logo.png')"}}><span>GitHub API</span></div>
        </div>
        </>
    )
}


//adicionar o link para os projetos
//solve responsiveness problem in this area (after 900px, problems appear)