const Footer = () => {
    const openingHours = [
        { day: "Maandag", hours: "8 - 16" },
        { day: "Dinsdag", hours: "8 - 16" },
        { day: "Woensdag", hours: "8 - 14" },
        { day: "Donderdag", hours: "8 - 16" },
        { day: "Vrijdag", hours: "8 - 16" },
        { day: "Zaterdag", hours: "8 - 14" },
        { day: "Zondag en Feestdagen", hours: "Gesloten" },
    ]

    return (
        <div className="bg-[#6a0017] p-10">
            <h1>CONTACT</h1>

            <div className="flex flex-col md:flex-row justify-center mt-2 space-x-0 md:space-x-40 space-y-4 md:space-y-0">
                <div>
                    <h2 className="mb-2 md:mb-6">Openingsuren</h2>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-[0.20em]">
                        {
                            openingHours.map(openingHour => {
                                return <>
                                    <div key={openingHour.day}>{openingHour.day}</div>
                                    <div key={openingHour.day}>{openingHour.hours}</div>
                                </>
                            })
                        }
                    </div>
                </div>

            <div>
                <h2 className="mb-2 md:mb-6">Contacteer ons</h2>

                <a href="tel:+32471 95 1977">+32 (0)471 95 19 77</a>
            </div>

            <div>
                <h2 className="mb-2 md:mb-6">Bezoek ons</h2>

                <a href="https://goo.gl/maps/QbnRgaVU8LyE7Vx4A" target="_blank">
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
            ></iframe>
        </div> 
    </div>
    )
}

export default Footer