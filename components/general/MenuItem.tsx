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
        <div className='w-full text-white border-b-2 border-white pb-2'>
            <div className='flex justify-between gap-2'>
                <div className='flex flex-col'>
                    <p className='font-mont_reg'><b>{name}</b></p>
                    <p className='font-open text-xs'>{description}</p>
                </div>
                <p>{price}</p>
            </div>
            {pieces ? <p className='font-open text-xs text-right'>{pieces} mcx</p> : <></>}
        </div>
    )
}