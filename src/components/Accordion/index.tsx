export default function Accordion() {
    return (
        <div className="accordion m-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        University
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        I started studying Computer Science at FEI University Center in the 1st semester of 2022, and my graduation is expected to take place in the 2nd semester of 2023. So far, I have learned a lot through my college studies, such as Python, C, and Java. I have completed various exercises and projects using these languages. With Python, for example, I have worked on projects using libraries like Pandas and Matplotlib. In Java, I have worked on several projects, including a basic CRUD application for performing operations with a SQL database (specifically, PostgreSQL).
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        On-line Courses
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    I have been studying on my own since I started college, especially through the JSFullStack course offered by OneBitCode. The course consists of over 100 hours of classes and exercises, covering topics such as HTML, CSS, SCSS, SASS, JavaScript, Bootstrap, Git/GitHub, ReactJs, TypeScript, NextJS, Bulma, NodeJS, MongoDB, SQL databases with NodeJS, object-oriented programming, among others. In addition to this course, I also stay informed about the constant updates in the world of technology by following forums and social media platforms.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Languages
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    )
}