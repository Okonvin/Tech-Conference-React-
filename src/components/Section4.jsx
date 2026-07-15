 function Section4(){
    const speakers = [
        {
            name: "elena vasquez",
            role: "PRINCIPAL FRONTEND ENGINEER @BYTECRAFT",
            talk: "THE NEXT FRONTIER OF WEB DEVELOPMENT",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417137/tech-conference/one_u7b7n5.png",
        },
        {
            name: "naomi tanaka",
            role: "ACCESSIBILITY ENGINEERING LEAD @AXION",
            talk: "SCREEN READERS DESERVE BETTER COMPONENTS",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417137/tech-conference/two_l3qiha.png",
        },
        {
            name: "james okonkwo",
            role: "ENGINEERING DIRECTOR @CARTWELL",
            talk: "MONOREPOS AT SCALE: LESSONS FROM 500 PACKAGES",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417136/tech-conference/three_jlfrr0.png",
        },
        {
            name: "sarah lindstrom",
            role: "DESIGN SYSTEMS LEAD @TERESA",
            talk: "TYPE-SAFE DESIGN TOKENS ACROSS PLATFORMS",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417136/tech-conference/four_dwcstk.png",
        },
        {
            name: "priya sharma",
            role: "SENIOR DEVELOPER ADVOCATE @COBALT",
            talk: "ARIA PATTERNS YOU'RE PROBABLY USING WRONG",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417136/tech-conference/five_tdgmvf.png",
        },
        {
            name: "lucas moreau",
            role: "SENIOR FRONTEND ENGINEER @WEBSMITH",
            talk: "BROWSER DEVTOOLS: HIDDEN GEMS FOR CSS DEBUGGING",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417135/tech-conference/six_vgonyt.png",
        },
        {
            name: "ryan o'sullivan",
            role: "DEVTOOL ENGINEER @COBALT",
            talk: "PROFILING REACT RENDERS AT 120FPS",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417135/tech-conference/seven_mmpojq.png",
        },
        {
            name: "tom kowaski",
            role: "PLATFORM ENGINEER @NIMBUS",
            talk: "DEPLOY PREVIEW ENVIRONMENTS THAT SCALE",
            img: "https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417135/tech-conference/eight_mazgvh.png",
        },
    ]

    return (
        <section className="mx-auto max-w-6xl border-b border-line px-8 py-20">
            <h1 className="mb-10 font-utility text-[0.8rem] tracking-wide text-comment">// FEATURED_SPEAKERS</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {speakers.map((speaker) => (
                    <div className="flex flex-col overflow-hidden rounded border border-line bg-surface" key={speaker.name}>
                        <div className="aspect-[4/5] w-full overflow-hidden bg-surface-2">
                            <img src={speaker.img} alt={speaker.name} className="h-full w-full object-cover" />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div>
                                <h2 className="text-lg lowercase text-text">{speaker.name}</h2>
                                <p className="mt-1 font-utility text-[0.68rem] tracking-wide text-text-dim">{speaker.role}</p>
                            </div>

                            <div className="my-4 h-px bg-line"></div>

                            <p className="text-[0.78rem] uppercase text-text-dim">{speaker.talk}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section4
