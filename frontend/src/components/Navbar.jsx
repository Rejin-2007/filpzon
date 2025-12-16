import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {user, setUser, setShowUserLogin, navigate} = useAppContext()
    const logout = async () => {
        setUser(false)
        navigate('/')
    }
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={()=> setOpen(false)}>
                <img src={assets.logo} alt="Logo" />
            </NavLink>
            {/* Desktop Menu */}
                <div className="hidden sm:flex items-center gap-8">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">All Products</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                        <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                        <img src={assets.search_icon} alt="Search Icon" className='w-4 h-4' />
                    </div>

                    <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                        <img src={assets.cart_icon} alt="Cart Icon" className='w-6 opacity-80   ' />
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-5 h-5 rounded-full">3</button>
                    </div>

                    {!user ? (
                        <button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary/75 transition text-white rounded-full">
                        Login
                    </button>
                    ):(
                        <div className='relative group'>
                            <img src={assets.profile_icon} alt="Profile Photo" className='w-16 h-16'/>
                            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-primary-dull py-2.5 w-30 rounded text-sm z-40'>
                                <li onClick={()=> navigate("my-orders") }className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                                <li onClick = {logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <img src={assets.menu_icon} alt="Menu" className='' />
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to="/" className="block" onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/products" className="block" onClick={() => setOpen(false)}>All Products</NavLink>
                {
                    user && <NavLink className="contact" onClick={() => setOpen(false)}>My Orders</NavLink>
                }
                <NavLink to="/contact"  onClick={() => setOpen(false)}>Contact</NavLink>
                {
                    !user ? (
                        <button onClick={() => {
                            setUser(false)
                            setShowUserLogin(true)
                        }
                        } className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary/75 transition text-white rounded-full text-sm">
                            Login
                        </button>
                    ) : (
                        <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary/75 transition text-white rounded-full text-sm">
                            Logout
                        </button>
                    )
                }

            </div>

        </nav>
    )
}

export default Navbar