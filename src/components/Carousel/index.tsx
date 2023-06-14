import CarouselCard from "./CarouselCard"

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide pb-5">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <p className="display-5 text-center w-100 mb-5" style={{color: "#01003f"}}>Some Projects</p>
                <div className="carousel-item active">
                    <CarouselCard title="SpaceX Clone" text="This project was made using only SCSS, BootStrap & HTML. For compiling and packing were used Babel and Webpack." url="https://github.com/EnzoBozzani/spacex" src="/spacex.png"/>
                </div>
                <div className="carousel-item">
                    <CarouselCard title="SpaceX Clone" text="This project was made using only SCSS, BootStrap & HTML. For compiling and packing were used Babel and Webpack." url="https://github.com/EnzoBozzani/spacex" src="/spacex.png"/>
                </div>
                <div className="carousel-item">
                    <CarouselCard title="SpaceX Clone" text="This project was made using only SCSS, BootStrap & HTML. For compiling and packing were used Babel and Webpack." url="https://github.com/EnzoBozzani/spacex" src="/spacex.png"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

//adicionar imagens dos projetos do github
//problema da centralizacão