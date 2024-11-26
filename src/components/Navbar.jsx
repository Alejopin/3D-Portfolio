
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to="/" className="w-15 h-10 rounded-lg bg-whiteflex justify-center items-center">
                <p className="blue-gradient_text">Home</p>
            </NavLink>
            <nav>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
                    <p className="blue-gradient_text">About</p>
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    <p className='blue-gradient_text'>Projects</p>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    <p className='blue-gradient_text'>Contact</p>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar