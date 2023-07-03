import styles from "./ProjectsSection.module.scss";
import Project from "./Project";

export default function ProjectsSection(props: {lang: string}){
    return (
        <>
            <span className="display-5 mt-5 mb-2 text-center w-100 main-color" id="pSection">{props.lang !== '🇺🇸 (EN-US)' ? 'Some Projects' : 'Alguns Projetos'}</span>
            <span className="mb-5 text-center w-100 sec-color">{props.lang !== '🇺🇸 (EN-US)' ? 'Click to go to Project Repository' : 'Clique para ir ao repositório do Projeto'}</span>
            <div className={`${styles.pSection}`}>
                <Project src="/spacex.png" text="SpaceX" url="https://github.com/EnzoBozzani/spacex"/>
                <Project src="/lp.png" text="Landing Page" url="https://github.com/EnzoBozzani/landing-page"/>
                <Project src="/countries.png" text="Countries API" url="https://github.com/EnzoBozzani/search-countries-project"/>
                <Project src="/calc.png" text="Calculator" url="https://github.com/EnzoBozzani/simple-calculator"/>
                <Project src="/github.png" text="GitHub API" url="https://github.com/EnzoBozzani/github-api"/>
        </div>
        </>
    )
}

