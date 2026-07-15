//  function Barcode(){
//     const bars = [3,1,2,1,3,2,1,2,3,1,2,1,3,1,2]
//     return (
//         <div className="flex h-7 items-end gap-[2px]" aria-hidden="true">
//             {bars.map((w, i) => (
//                 <span
//                     key={i}
//                     className="bg-text-dim/70"
//                     style={{ width: `${w}px`, height: "100%" }}
//                 ></span>
//             ))}
//         </div>
//     )
// }

// function Section5(){
//     const schedule = [
//         {
//             track: "PERFORMANCE",
//             color: "pink",
//             title: "video compression for the web: the middle-out approach",
//             speaker: "DINESH CHUGTAI",
//             company: "PIED PIPER",
//             start: "11:00",
//             end: "12:00",
//             day: "DAY 1",
//         },
//         {
//             track: "FRONTEND",
//             color: "accent",
//             title: "css container queries in production",
//             speaker: "MEI-LIN ZHANG",
//             company: "ROAMLY",
//             start: "13:00",
//             end: "14:00",
//             day: "DAY 1",
//         },
//         {
//             track: "ACCESSIBILITY",
//             color: "sky",
//             title: "designing accessible audio experiences",
//             speaker: "FATIMA AL-RASHID",
//             company: "SPECTRA",
//             start: "11:00",
//             end: "12:00",
//             day: "DAY 2",
//         },
//         {
//             track: "TOOLING",
//             color: "accent-2",
//             title: "deploy preview environments that scale",
//             speaker: "TOM KOWALSKI",
//             company: "NIMBUS",
//             start: "12:00",
//             end: "13:00",
//             day: "DAY 3",
//         },
//     ]

//     const colorClasses = {
//         pink: { text: "text-white", bg: "bg-black" },
//         accent: { text: "text-white", bg: "bg-black" },
//         sky: { text: "text-white", bg: "bg-black" },
//         "accent-2": { text: "text-white", bg: "bg-black" },
//     }

//     return (
//         <section className="mx-auto max-w-6xl px-8 pb-24 pt-20">
//             <h1 className="mb-10 font-utility text-[0.8rem] tracking-wide text-comment">//  SCHEDULE_HIGHLIGHTS</h1>

//             <div className="flex flex-col gap-5">
//                 {schedule.map((item) => (
//                     <div
//                         className="flex flex-col overflow-hidden rounded border border-line bg-surface sm:flex-row"
//                         key={item.title}
//                     >
//                         <div className={`flex items-center justify-center border-b border-dashed border-line px-4 py-3 sm:border-b-0 sm:border-r sm:px-3 sm:py-0 ${colorClasses[item.color].bg}`}>
//                             <span className={`font-utility text-xs tracking-[0.2em] sm:[writing-mode:vertical-rl] sm:rotate-180 ${colorClasses[item.color].text}`}>
//                                 {item.track}
//                             </span>
//                         </div>

//                         <div className="flex-1 p-6">
//                             <h2 className="text-xl lowercase text-text">{item.title}</h2>
//                             <div className="mt-3 font-utility text-xs tracking-wide text-text-dim">
//                                 {item.speaker} <span className="text-comment">//</span> {item.company}
//                             </div>
//                             <a href="#" className="mt-4 inline-block font-utility text-xs tracking-wide text-accent hover:underline">
//                                 + SHOW DETAILS
//                             </a>
//                         </div>

//                         <div className="flex flex-row items-center justify-between gap-4 border-t border-dashed border-line px-6 py-4 sm:flex-col sm:justify-center sm:gap-2 sm:border-l sm:border-t-0 sm:px-6">
//                             <div className="text-center font-utility">
//                                 <strong className="block text-sm text-text">{item.start}</strong>
//                                 <small className="text-xs text-text-dim">{item.end}</small>
//                             </div>
//                             <Barcode/>
//                             <p className="font-utility text-[0.65rem] tracking-widest text-text-dim">{item.day}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="mt-14 flex justify-center">
//                 <button className="rounded-sm border border-accent px-8 py-3.5 font-utility text-sm tracking-wide text-accent shadow-[0_0_20px_rgba(232,163,61,0.15)] transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-[#14100a] hover:shadow-[0_10px_28px_rgba(232,163,61,0.3)]">
//                     VIEW FULL SCHEDULE
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default Section5

function Barcode(){
    const bars = [3,1,2,1,3,2,1,2,3,1,2,1,3,1,2]
    return (
        <div className="flex h-7 items-end gap-[2px]" aria-hidden="true">
            {bars.map((w, i) => (
                <span
                    key={i}
                    className="bg-[#14100a]/50"
                    style={{ width: `${w}px`, height: "100%" }}
                ></span>
            ))}
        </div>
    )
}

function Section5(){
    const schedule = [
        {
            track: "PERFORMANCE",
            color: "pink",
            title: "video compression for the web: the middle-out approach",
            speaker: "DINESH CHUGTAI",
            company: "PIED PIPER",
            start: "11:00",
            end: "12:00",
            day: "DAY 1",
        },
        {
            track: "FRONTEND",
            color: "accent",
            title: "css container queries in production",
            speaker: "MEI-LIN ZHANG",
            company: "ROAMLY",
            start: "13:00",
            end: "14:00",
            day: "DAY 1",
        },
        {
            track: "ACCESSIBILITY",
            color: "sky",
            title: "designing accessible audio experiences",
            speaker: "FATIMA AL-RASHID",
            company: "SPECTRA",
            start: "11:00",
            end: "12:00",
            day: "DAY 2",
        },
        {
            track: "TOOLING",
            color: "accent-2",
            title: "deploy preview environments that scale",
            speaker: "TOM KOWALSKI",
            company: "NIMBUS",
            start: "12:00",
            end: "13:00",
            day: "DAY 3",
        },
    ]

    const colorClasses = {
        pink: { solid: "#F8C4C0" },
        accent: { solid: "#F9E0AB" },
        sky: { solid: "#B9D0F3" },
        "accent-2": { solid: "#CBC4FD" },
    }

    return (
        <section className="mx-auto max-w-6xl px-8 pb-24 pt-20">
            <h1 className="mb-10 font-utility text-[0.8rem] tracking-wide text-comment">//  SCHEDULE_HIGHLIGHTS</h1>

            <div className="flex flex-col gap-5">
                {schedule.map((item) => (
                    <div
                        className="flex flex-col overflow-hidden rounded border border-white/50 sm:flex-row"
                        style={{ backgroundColor: colorClasses[item.color].solid }}
                        key={item.title}
                    >
                        <div className="flex items-center justify-center bg-black px-4 py-3 sm:px-3 sm:py-0">
                            <span className="font-utility text-xs tracking-[0.2em] text-white sm:[writing-mode:vertical-rl] sm:rotate-180">
                                {item.track}
                            </span>
                        </div>

                        <div className="flex-1 p-6">
                            <h2 className="text-xl lowercase text-[#14100a]">{item.title}</h2>
                            <div className="mt-3 inline-block font-utility text-xs tracking-wide text-[#14100a]/80">
                                {item.speaker} <span className="text-comment">//</span> {item.company}
                            </div>
                            <a href="#" className="mt-4 block font-utility text-xs tracking-wide text-[#14100a] hover:underline">
                                + SHOW DETAILS
                            </a>
                        </div>

                        <div className="flex flex-row items-center justify-between gap-4 border-t border-dashed border-black/70 px-6 py-4 sm:flex-col sm:justify-center sm:gap-2 sm:border-l sm:border-t-0 sm:px-6">
                            <div className="text-center font-utility">
                                <strong className="block text-sm text-[#14100a]">{item.start}</strong>
                                <small className="text-xs text-[#14100a]/60">{item.end}</small>
                            </div>
                            <Barcode/>
                            <p className="font-utility text-[0.65rem] tracking-widest text-[#14100a]/60">{item.day}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-14 flex justify-center">
                <button className="rounded-sm border border-accent px-8 py-3.5 font-utility text-sm tracking-wide text-accent shadow-[0_0_20px_rgba(232,163,61,0.15)] transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-[#14100a] hover:shadow-[0_10px_28px_rgba(232,163,61,0.3)]">
                    VIEW FULL SCHEDULE
                </button>
            </div>
        </section>
    )
}

export default Section5

