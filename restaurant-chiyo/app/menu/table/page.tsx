import MenuItem from "@components/MenuItem"

export default function Table() {
    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-1/3 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu-table.JPG")' }}
            >
                <h1 className='font-bebas text-7xl'>Table d'hôte</h1>
            </div>
            <section className='w-full flex flex-col justify-center items-center font-mont_reg text-white '>

                <section className='text-center pt-4 pl-2 pr-2'>
                    <p>Servis avec / <i>served with</i></p>
                    <p className='pt-4'>Soupe au choix (Légumes, Won Ton, Citro, Coco ou Miso)</p>
                    <p className='text-sm'><i>Choice of soup (Vegetables, Won Ton, Citro, Coco or Miso)</i></p>
                    <p className='pt-4'>Rouleau impérial (frit) ou printemps au poulet (froid)</p>
                    <p className='text-sm'><i>Imperialroll (hot) or chicken springroll (cold)</i></p>
                </section>

                <section className='w-5/6 flex flex-row justify-around pt-4'>
                    <section className='w-1/3 flex flex-col justify-stretch gap-5'>
                        <MenuItem name='Poulet, crevettes et légumes sautés servi sur nouilles croustillantes' english='Chicken, shrimps, vegetables stir fry served on crispy noodles' price={28}></MenuItem>
                        <MenuItem name='Poulet à la sauce aux arachides et épinards croustillants servi avec choix de riz ou de vermicelles' english='Peanut butter chicken served with spinach crisps and choice of rice or vermicelli' price={28}></MenuItem>
                        <MenuItem name='Combinaison de fruits de mer à la sauce au cari rouge servis avec choix de riz ou de vermicelles' english='Red curry seafood combination served with choice of rice or vermicelli' price={35}></MenuItem>
                        <MenuItem name="Grillades de poulet et crevettes à l'asiatique servi avec salade et choix de riz ou de vermicelles" english='Asian style grilled chicken and shrimps served with salad and choice of rice or vermicelli' price={28}></MenuItem>
                        <MenuItem name="Trio de grillades a l'asiatique (poulet, boeuf, crevette) servi avec salade et choix de riz ou de vermicelles" english='Asian style grilled chicken, beef and shrimps served with salad and choice of rice or vermicelli' price={32}></MenuItem>
                        <MenuItem name='Sizzling de fruit de mer et légumes avec choix de riz ou de vermicelles' english='Sea food sizzling served with choice of rice or vermicelli' price={36}></MenuItem>
                    </section>

                    <section className='w-1/3 flex flex-col justify-stretch gap-5'>
                        <MenuItem name='Boeuf et légumes sautés servi sur nouilles croustillantes' english='Beef and vegetables stir fry served on crispy noodles' price={28}></MenuItem>
                        <MenuItem name='Crevettes sautées aux légumes à la sauce au aigre douce servi avec choix de riz ou de vermicelles' english='Sweet and sour shrimps and vegetables served with choice of rice or vermicelli' price={30}></MenuItem>
                        <MenuItem name="Grillades de poulet et de boeuf à l'asiatique servi avec salade et choix de riz ou de vermicelles" english='Asian style grilled chicken and beef served with salad and choice of rice or vermicelli' price={28}></MenuItem>
                        <MenuItem name="Grillades de boeuf et crevettes à l'asiatique servi avec salade et choix de riz ou de vermicelles" english='Asian style grilled beef and shrimps served with salad and choice of rice or vermicelli' price={29}></MenuItem>
                        <MenuItem name='Teriyaki sur un lit de légumes sautés avec choix de riz ou de vermicelles' english='Teriyaki on a sautéed vegetables bed served with choice of rice or vermicelli' price={34}></MenuItem>
                        <MenuItem name='Général Tao avec choix de riz ou de vermicelles' english='General Tao with choice of rice or vermicelli' price={28}></MenuItem>
                    </section>

                </section>
            </section>
        </section>
    )
}