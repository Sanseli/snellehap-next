const Footer = () => {
    const openingHours = [
        { id: 0, day: "Maandag", morning: "10:30-14:00", evening: "" },
        { id: 1, day: "Dinsdag", morning: "10:30-14:00", evening: "" },
        { id: 2, day: "Woensdag", morning: "10:30-14:00", evening: "16:00-19:00" },
        { id: 3, day: "Donderdag", morning: "10:30-14:00", evening: "15:30-19:00"  },
        { id: 4, day: "Vrijdag", morning: "10:30-14:00", evening: "15:30-19:30" },
        { id: 5, day: "Zaterdag", morning: "11:00-14:30", evening: "16:00-19:30" },
        { id: 6, day: "Zondag", morning: "11:30-14:30", evening: "16:00-19:00"  },
    ]

    return (
        <>
            <div id="contact" className="bg-[#7e001e] px-12 pt-14 md:pt-20 pb-8 md:pb-12 shadow-inner">
                <h1 className="text-center text-xl pb-10 font-semibold">CONTACT</h1>

                <div className="container mx-auto">
                    {/* <div className="lg:grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 justify-center mt-2 gap-0 md:gap-20 space-y-4 md:space-y-0 self-center h-full"> */}
                    <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24 justify-center">
                        <div>
                            <h2 className="mb-2 md:mb-6 text-lg flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 self-center"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Openingsuren</span>
                            </h2>

                            <div className="grid gap-x-5 gap-y-[0.20em] grid-cols-3 grid-flow-row-dense text-sm md:text-base">
                                {
                                    openingHours.map(openingHour => {
                                        return <>
                                            <div key={openingHour.id} className="">{openingHour.day}</div>
                                            <div key={openingHour.id} className="w-fit">{openingHour.morning}</div>
                                            <div key={openingHour.id} className="w-fit">{openingHour.evening}</div>
                                        </>
                                    })
                                }
                            </div>
                        </div>

                        <div className=" justify-self-center md:h-full">
                            <h2 className="mb-2 md:mb-6 text-lg flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 self-center">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span>Contacteer ons</span>
                            </h2>

                            <a href="tel:+32471 95 1977" className="text-sm lg:text-base">+32 (0)471 95 19 77</a>
                        </div>

                        <div className="justify-self-center md:h-full">
                            <h2 className="mb-2 md:mb-6 text-lg flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 self-center">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>Bezoek ons</span>
                            </h2>

                            <a href="https://goo.gl/maps/QbnRgaVU8LyE7Vx4A" target="_blank" className="text-sm lg:text-base">
                                TakeAway De Snelle Hap <br />
                                Markt 5 <br />
                                3980 Tessenderlo
                                België
                            </a>
                        </div> 
                        <iframe
                            id="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.227821509602!2d5.0858278157538495!3d51.0673443795653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1392d82bb3705%3A0x2cd03ac95764df59!2sDe%20Snelle%20Hap!5e0!3m2!1sen!2sbe!4v1651273454250!5m2!1sen!2sbe"
                            width="auto"
                            height="auto"
                            loading="lazy"
                            className="invisible lg:visible h-0 lg:h-auto"
                        ></iframe>

                    </div>
                </div> 
            </div>
            <div className="bg-[#690019] p-4 text-sm text-center shadow-lg">
                De Snelle Hap © 2022
            </div>
        </>
    )
}

export default Footer