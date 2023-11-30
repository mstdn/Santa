import { useKeyboardControls } from '@react-three/drei'
import useGame from '../stores/useGame.jsx'

export default function MobileInterface()
{
    const coins = useGame((state) => state.coins)
    const totalCoins = useGame((state) => state.totalCoins)

    return <>
         <div className="mobileInterface">
            <div className='flex justify-end pr-2 pt-2 '>
                <div className='flex bg-white bg-opacity-50 rounded-lg p-2 border border-[#D6001C]'>
                    <div className='text-md text-[#D6001C]'>
                        { coins } / { totalCoins }
                    </div>
                    <div className='pl-2'>
                        <img className='w-6' src={ "./assets/images/coin.png" } alt="coin" />
                    </div>
                </div>
            </div>
        </div>
    </>
}
