import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'MBIT - Best Crypto Wallet for You',
        subheading: 'MBIT is a digital sanctuary structured to streamline your Web3 journey, whether youre an absolute beginner or a seasoned professional.',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Easy to create wallet',
        subheading: 'Establish your profile promptly and immerse yourself in the world of blockchain-driven finance.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Powerful Features',
        subheading: 'Experience a seamless desktop and mobile app function. MBIT, a crypto wallet, is crafted to streamline your exploration of Web3, regardless if youExperience a seamless desktop and mobile app function.',
    },
]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">Speed, Security, Scalability</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Consensus protocol delivers unparalleled speed, security, and reliability. Enjoy almost instant transactions and extremely low fees.</h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Seamlessly send and acquire digital assets, anytime, anywhere..</p>
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {featuresdata.map((items, i) => (
                            <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
