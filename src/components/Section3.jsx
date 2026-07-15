 function Section3(){
    return (
        <>
            <section className="mx-auto max-w-6xl border-b border-line px-8 py-20">
                <p className="mb-3 font-utility text-[0.8rem] tracking-wide text-comment">// TRACKS</p>
                <h2 className="mb-10 max-w-[16ch] text-3xl">FOUR PATHS THROUGH THE CONFERENCE</h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent-2">
                        <h3 className="mb-3 text-base text-accent-2">FRONTEND</h3>
                        <p className="text-[0.82rem] text-text-dim">BUILDING MODERN INTERFACES <br/> FOR THE WEB</p>
                    </div>

                    <div className="rounded border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent-2">
                        <h3 className="mb-3 text-base text-accent-2">PERFORMANCE</h3>
                        <p className="text-[0.82rem] text-text-dim">MAKE EVERY  <br/>MILISECOND COUNT</p>
                    </div>

                    <div className="rounded border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent-2">
                        <h3 className="mb-3 text-base text-accent-2">ACCESSIBILITY</h3>
                        <p className="text-[0.82rem] text-text-dim">BUILDING EXCLUSIVE <br/> EXPERIENCES FOR EVERYONE</p>
                    </div>

                    <div className="rounded border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent-2">
                        <h3 className="mb-3 text-base text-accent-2">TOOLING</h3>
                        <p className="text-[0.82rem] text-text-dim"> LEVEL UP YOUR <br/> DEVELOPER WORKFLOW</p>
                    </div>
                </div>
           </section>
        </>
    )
}

export default Section3
