export default function Carte() {
    return (
        <section className='w-full h-screen'>
            <div
                className='w-full h-1/3 bg-cover bg-[center_65rem] flex flex-col justify-center items-center'
                style={{ backgroundImage: 'url("/assets/images/menu-carte.JPG")' }}
            >
                <h1>À la carte</h1>
            </div>
        </section>
    )
}