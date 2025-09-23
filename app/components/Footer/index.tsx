import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'Features', 'FAQ'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/insta.svg', href: "https://instagram.com/" },
  { imgsrc: '/images/Footer/dribble.svg', href: "https://dribble.com/" },
  { imgsrc: '/images/Footer/twitter.svg', href: "https://x.com/bitnovalabs?t=HcAeJ2Yp-grUP6WMY1FZ0w&s=09" },
  { imgsrc: '/images/Footer/youtube.svg', href: "https://youtube.com/" },
]


const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-6'>
              <Image src="/logo (3).png" alt="alt" width={150} height={100} />
            
            <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> 
            Bitnova Labs Ltd is an active company incorporated on 27 August 2025 with the registered office located in London, Greater London. Bitnova Labs Ltd was registered 26 days ago.
Watch Company
              </h3>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}><img src={items.imgsrc} alt={items.imgsrc} className='footer-icons' /></Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />(406) 555-012</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />support@bitnova.com</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</h4>
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>@2025 - All Rights Reserved by <Link href="/" target="_blank"> Bitnova Labs Ltd</Link></h3>
      </div>
{/* WhatsApp icon */}
      <a
        href="https://wa.me/14329238776"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon">
<Image src="/whatsapp.png" alt="alt" width={100} height={100} />

        </i>
      </a>
      
        <br/>
       
  
      <div className="on-desktop">
      <a href="https://t.me/bietnovalabs"><Image src="/telegram.png" alt="alt" width={100} height={100} /></a>
</div>
<div className="on-mobile">
     <a href="https://t.me/bietnovalabs">https://t.me/bietnovalabs</a>
</div>
    </div>
  )
}

export default footer;
