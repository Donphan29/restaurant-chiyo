export default function MenuItem({
    name, description, price, pieces
}: {
    name: string;
    description: string;
    price: number;
    pieces?: number;
}
) {
    return (
        <div className='w-full font-mont_reg text-white border-b-2 border-white pb-2'>
            <div className='flex justify-between gap-2'>
                <div className='flex flex-col'>
                    <p><b>{name}</b></p>
                    <p className='text-xs'>{description}</p>
                </div>
                <p>{price}</p>
            </div>
            {pieces ? <p className='text-xs text-right'>{pieces} mcx</p> : <></>}
        </div>
    )
}