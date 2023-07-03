export default function Accordion(props: {lang: string}) {
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {props.lang !== '🇺🇸 (EN-US)' ? 'University' : 'Universidade'}
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.lang !== '🇺🇸 (EN-US)' ?
                            (<>I started studying Computer Science at FEI University Center in the 1st semester of 2022, and my graduation is expected to take place in the 2nd semester of 2025. So far, I have learned a lot through my college studies, such as Python, C, and Java. I have completed various exercises and projects using these languages. With Python, for example, I have worked on projects using libraries like Pandas and Matplotlib. In Java, I have worked on several projects, including a basic CRUD application for performing operations with a SQL database (specifically, PostgreSQL).</>)
                            :
                            (<>Comecei a estudar Ciência da Computação no Centro Universitário FEI no primeiro semestre de 2022, e minha formatura está prevista para o segundo semestre de 2023. Até agora, aprendi muito por meio dos meus estudos na faculdade, como Python, C e Java. Completei vários exercícios e projetos usando essas linguagens. Com Python, por exemplo, trabalhei em projetos utilizando bibliotecas como Pandas e Matplotlib. Em Java, trabalhei em diversos projetos, incluindo uma aplicação básica de CRUD para realizar operações com um banco de dados SQL (especificamente, PostgreSQL).</>)
                        }
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {props.lang !== '🇺🇸 (EN-US)' ? 'On-line Courses' : 'Cursos Online'}
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.lang !== '🇺🇸 (EN-US)' ?
                            (<>I have been studying on my own since I started college, especially through the JSFullStack course offered by OneBitCode. The course consists of over 100 hours of classes and exercises, covering topics such as HTML, CSS, SCSS, SASS, JavaScript, Bootstrap, Git/GitHub, ReactJs, TypeScript, NextJS, Bulma, NodeJS, MongoDB, SQL databases with NodeJS, object-oriented programming, among others. In addition to this course, I also stay informed about the constant updates in the world of technology by following forums and social media platforms.</>)
                            :
                            (<>Tenho estudado por conta própria desde que comecei a faculdade, especialmente através do curso JSFullStack oferecido pela OneBitCode. O curso consiste em mais de 100 horas de aulas e exercícios, abrangendo tópicos como HTML, CSS, SCSS, SASS, JavaScript, Bootstrap, Git/GitHub, ReactJs, TypeScript, NextJS, Bulma, NodeJS, MongoDB, bancos de dados SQL com NodeJS, programação orientada a objetos, entre outros. Além desse curso, também me mantenho informado sobre as constantes atualizações no mundo da tecnologia através da participação em fóruns e plataformas de mídia social.</>)
                        }
                    
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        {props.lang !== '🇺🇸 (EN-US)' ? 'Languages' : 'Idiomas'}
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.lang !== '🇺🇸 (EN-US)' ?
                            (<>My native language is Portuguese, but I have an advanced level of English. I have studied English throughout my entire school life, from the age of 6 until I graduated from high school at 17. Additionally, I took private English lessons with a tutor from the age of 12 until 17.</>)
                            :
                            (<>Minha língua nativa é o português, mas tenho um nível avançado de inglês. Estudei inglês durante toda a minha vida escolar, desde os 6 anos até me formar no ensino médio aos 17 anos. Além disso, fiz aulas particulares de inglês com um tutor dos 12 aos 17 anos.</>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}