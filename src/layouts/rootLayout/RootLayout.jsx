import { Link } from 'react-router-dom'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header className='rootLayout'>
            <Link to='/'>
                <img src='/logo.png' alt='' />
                <span>TICO AI ChatBoT</span>
            </Link>
        </header>
    </div>
  )
}

export default RootLayout