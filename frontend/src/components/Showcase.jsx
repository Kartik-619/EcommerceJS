const Showcase=()=>{
    return(
        <section id="showacase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline/>
                <div className="mask">
                    <img src="/mask-logo.svg"/>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">\
                        <h2>Rocket Chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>Introducing 
                                <span className="text-white">
                                    M4, the next generation of Apple Silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you 
                            </p>
                            <p>
                                A brand-new display engine delivers breath-taking 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase