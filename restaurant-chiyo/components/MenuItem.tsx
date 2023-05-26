export default function MenuItem({
    name, english, price
}: {
    name: string;
    english: string
    price: number;
}) {
    return (
        <div className='w-full font-mont_reg flex justify-between text-white border-b-2 border-white pb-2'>
            <div className='flex flex-col'>
                <p><b>{name}</b></p>
                <p className='text-sm'>{english}</p>
            </div>
            <p>{price}</p>
        </div>
    )
}