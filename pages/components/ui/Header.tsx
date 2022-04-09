
import logo from '../../../public/img/logo.png'
import Image from 'next/image'


const Header = () => {
  return (
    <div>
        <header className='center'>
        <Image
        src={logo}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        </header>
    </div>
  )
}

export default Header