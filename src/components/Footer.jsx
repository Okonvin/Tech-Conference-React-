 import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer className="border-t border-line bg-surface">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-8 pb-12 pt-16 md:flex-row md:justify-between">
                <div className="max-w-sm">
                    <h1 className="text-xl text-text">DEVHORIZON_26</h1>
                    <p className="mt-4 text-sm text-text-dim">
                        A three day conference for engineers who build <br/> the interfaces humans use every day
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-4 font-utility text-xs tracking-wide text-comment">// NAVIGATE</h2>
                        <div className="flex flex-col gap-2 text-sm text-text-dim">
                            <Link to="/" className="transition-colors hover:text-accent">Home</Link>
                            <Link to="/schedule" className="transition-colors hover:text-accent">Schedule</Link>
                            <Link to="/speakers" className="transition-colors hover:text-accent">Speakers</Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 font-utility text-xs tracking-wide text-comment">// TRACKS</h2>
                        <div className="flex flex-col gap-2 text-sm text-text-dim">
                            <p>Frontend</p>
                            <p>Performance</p>
                            <p>Accessibility</p>
                            <p>Tooling</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-4 font-utility text-xs tracking-wide text-comment">// VENUE</h2>
                        <p className="text-sm text-text-dim">
                            Pier 70 <br/> San Francisco, CA <br/> Nov 15&ndash;17, 2026
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-8 py-6 font-utility text-xs tracking-wide text-text-dim sm:flex-row sm:items-center sm:justify-between">
                <p>© 2026 DEVHORIZON. ALL RIGHTS RESERVED.</p>
                <a href="#top" className="transition-colors hover:text-accent">BACK TO TOP</a>
            </div>
        </footer>
    )
}

export default Footer
