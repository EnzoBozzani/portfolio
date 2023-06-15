import styles from "./ProjectsSection.module.scss";

export default function ProjectsSection(){
    return (
        <>
            <p className="display-5 mt-5 mb-5 text-center w-100 main-color" id="pSection">Some Projects</p>
            <div className={`${styles.pSection} mx-auto mb-5 w-75`}>
            
            <div
                style={{backgroundImage: "url('/ts-logo.png')"}}><span>SpaceX Clone</span></div>
            <div
                style={{backgroundImage: "url('/ts-logo.png')"}}><span>SpaceX Clone</span></div>
            <div
                style={{backgroundImage: "url('/ts-logo.png')"}}><span>SpaceX Clone</span></div>
            <div
                style={{backgroundImage: "url('/ts-logo.png')"}}><span>SpaceX Clone</span></div>
            <div
                style={{backgroundImage: "url('/ts-logo.png')"}}><span>SpaceX Clone</span></div>
        </div>
        </>
    )
}

//adicionar as imagens aos respectivos projetos
//adicionar o link para o projeto
//mudar os títulos 
//melhorar o span