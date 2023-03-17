const Menu = () => {
    const menuItems = [
        'menu_broodjes.jpg',
        'menu_friet.jpg',
        'menu_wrap_panini.jpg',
        'menu_specials.jpg',
        'menu_ijsbeker.jpg',
        'menu_kinderijsbeker.jpg'
    ]

    return (
        <div id="menu" className="text-center py-14 md:py-20">
            <h2 className="text-[#351500] text-xl pb-10 font-semibold">MENU</h2>
            <div className="flex flex-wrap justify-center">
                { menuItems.map((menuItem) => <img key={menuItem} alt={menuItem} src={'/menu/' + menuItem} className="md:max-w-xl m-3 md:-6 shadow-lg" />)}
            </div>
        </div>
    )
}
export default Menu