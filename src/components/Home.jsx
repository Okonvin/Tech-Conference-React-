

// function Home(){
//     return (
//         <>
//             <section className="mx-auto max-w-6xl px-8 pb-24 pt-20">
//                 <div className="mb-16 rounded-lg bg-[#FCEFE8] px-8 py-14">
//                     <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] lowercase text-[#14100a]">
//                         where code meets <br/> the machine<span className="text-accent animate-blink">_</span>
//                     </h1>
//                     <h1 className="mt-2 text-[clamp(3.2rem,9vw,7rem)] uppercase tracking-wide text-accent-2">HORIZON</h1>
//                     <div className="mt-6 flex gap-8 font-utility">
//                         <p className="text-sm tracking-wide text-[#6b5f57]">NOV 15-17, 2026</p>
//                         <p className="text-sm tracking-wide text-[#6b5f57]">PIER 70, SF</p>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 items-center gap-12 rounded border border-line bg-surface p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
//                     <div>
//                         <p className="mb-3 font-utility text-[0.8rem] tracking-wide text-comment">// FEATURED KEYNOTE</p>
//                         <h2 className="text-3xl">Elena Vasquez</h2>
//                         <p className="mt-2 text-sm text-text-dim">PRINCIPAL FRONTEND ENGINEER <br/> @BYTECRAFT</p>
//                         <h3 className="mb-3 mt-4 text-lg font-semibold uppercase text-text">THE NEXT FRONTIER OF WEB <br/> DEVELOPMENT</h3>
//                         <p className="text-sm text-text-dim">NOV 15 / 9:00 / ROOM A</p>
//                         <button className="group mt-7 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-[#14100a] transition-all hover:-translate-y-0.5 hover:bg-[#f2b453]">
//                             VIEW TALK
//                             <span className="transition-transform group-hover:translate-x-1">→</span>
//                         </button>
//                     </div>

//                     <div className="order-first md:order-none">
//                         <img
//                             className="block h-auto w-full rounded"
//                             src="https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417137/tech-conference/one_u7b7n5.png"
//                             alt=""
//                         />
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Home






function Home(){
    return (
        <>
            <section className="mx-auto max-w-6xl px-8 pb-24 pt-20">
                <div className="mb-16 rounded-lg bg-[#FCEFE8] px-8 py-14">
                    <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] lowercase text-[#14100a]">
                        where code meets <br/> the machine<span className="text-accent animate-blink">_</span>
                    </h1>
                    {/* <h1 className="mt-2 text-[clamp(3.2rem,9vw,7rem)] uppercase tracking-wide text-accent-2">HORIZON</h1> */}
                    <div className="mt-6 flex gap-8 font-utility">
                        <p className="text-sm tracking-wide text-[#6b5f57]">NOV 15-17, 2026</p>
                        <p className="text-sm tracking-wide text-[#6b5f57]">PIER 70, SF</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-center gap-12 rounded border border-line bg-surface p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
                    <div>
                        <p className="mb-3 font-utility text-[0.8rem] tracking-wide text-comment">// FEATURED KEYNOTE</p>
                        <h2 className="text-3xl">Elena Vasquez</h2>
                        <p className="mt-2 text-sm text-text-dim">PRINCIPAL FRONTEND ENGINEER <br/> @BYTECRAFT</p>
                        <h3 className="mb-3 mt-4 text-lg font-semibold uppercase text-text">THE NEXT FRONTIER OF WEB <br/> DEVELOPMENT</h3>
                        <p className="text-sm text-text-dim">NOV 15 / 9:00 / ROOM A</p>
                        <button className="group mt-7 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold tracking-wide text-[#14100a] transition-all hover:-translate-y-0.5 hover:bg-[#f2b453]">
                            VIEW TALK
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>

                    <div className="order-first md:order-none">
                        <img
                            className="block h-auto w-full rounded"
                            src="https://res.cloudinary.com/dumgzmdeb/image/upload/v1782417137/tech-conference/one_u7b7n5.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
