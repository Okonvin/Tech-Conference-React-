
import Section3 from "./Section3"


function Home(){
    return (
        <>
            <section className="main-container">
                <div className="main-div-1">
                    <h1>
                        where code meets <br/> the machine_
                    </h1>
                    <h1 className="horizon">HORIZON</h1>
                    <div className="sub-div-1">
                        <p>NOV 15-17, 2026</p>
                        <p>PIER 70, SF</p>
                    </div>
                </div>

                <div className="main-div-2">
                    <div className="text-div">
                        <p>// FEATURED KEYNOTE</p>
                        <h2>Elena Vasquez</h2>
                        <p>PRINCIPAL FRONTEND ENGINEER <br/> @BYTECRAFT</p>
                        <h3>THE NEXT FRONTIER OF WEB <br/> DEVELOPMENT</h3>
                        <p>NOV 15 / 9:00 / ROOM A</p>
                        <button className="btn">
                            VIEW TALK
                            <span>→</span>
                        </button>

                    </div>

                    <div className="img-div">
                        <img src="https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417137/tech-conference/one_u7b7n5.png" alt=""/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home