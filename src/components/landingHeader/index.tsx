import logo from '../../assets/crossed-racing-flags-checkered-race-free-svg-file-SvgHeart.Com.png'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

export default function LandingHeader() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full h-20 bg-transparent fixed flex items-center justify-center z-50"
            aria-label='Header'>
            <div className='w-11/12 h-full flex items-center justify-between'>
                <div className='h-full flex items-center gap-0'>
                    <img src={logo} alt="RACESTATS Logo" className='h-9' loading='eager' />
                    <h1 className='font-bold text-3xl text-white'
                        style={{
                            WebkitTextStroke: '1px black',
                            textShadow: '1px 1px 1px black'
                        }}>RACESTATS</h1>
                </div>
                <div aria-label='Header Navigation' className='flex items-center gap-2'>
                    <Button aria-label='Login Button' variant={"default"}>Login</Button>
                    <Button aria-label='Register Button' variant={"default"}>Register</Button>
                </div>
            </div>
        </motion.header>
    )
}