"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara?: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Mbit Wallet ',
        subheading: 'Keep a track of your money and explore the world of Web3',
       // hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Trust Capital',
        subheading: 'Empowering Trust, Elevating Capital.',
        //hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Catizone',
        subheading: 'Unleashing the Power of Felines in Finance',
       // hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'PixelFramer',
        subheading: 'PixelFramer is revolutionizing the crypto market',
       // hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'NaviDOG',
        subheading: 'Exploring the Crypto Future with the Dependability of a Close Companion',
        //hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Banana GUNO',
        subheading: 'Peel into Profit with Banana GUNO',
       // hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Featured Projects</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Favtech Labs always brings dedication to every accompanying project.
<br /> LPrime Vision and Path Unveiled by Favtech Labs.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
