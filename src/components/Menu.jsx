import img from '../assets/image/menu-bg.jpg';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <span id='menu'></span>
            <section className="xl:max-w-[1280px] w-full mx-auto sm:px-10 px-20 flex flex-col sm:mt-40 mt-28 h-[70vh]">
                <div className='w-fit xs:mb-10'>
                    <h2 className='font-play sm:text-7xl ss:text-5xl text-3xl text-gradient uppercase inline-block'>O U R &nbsp; M E N U.</h2>
                    <div className='h-[3px] bg-cf-gradient' />
                </div>
                <div className='ss:grid grid-cols-5 ss:mt-16 mt-10 justify-center items-center flex flex-col'>
                    <ul className='col-span-3 flex flex-wrap gap-5 justify-start ss:mb-52 mb-10 sm:max-w-[450px] max-w-[300px]'>
                        <li className='flex'>
                            <Link to='/menu/pho' className='bg-white text-secondary sm:px-10 ss:px-5 sm:py-4 py-1 px-1 font-semibold ss:text-xl text-base transition rounded-md duration-[400ms] hover:bg-[#9f643d] hover:text-white'>Pho</Link>
                        </li>
                        <li className='flex'>
                            <Link to='/menu/noodles' className='bg-white text-secondary sm:px-10 ss:px-5 sm:py-4 py-1 px-1 font-semibold ss:text-xl text-base rounded-md duration-[400ms] hover:bg-[#9f643d] hover:text-white'>Noodles</Link>
                        </li>
                        <li className='flex'>
                            <Link to='/menu/starter' className='bg-white text-secondary sm:px-10 ss:px-5 sm:py-4 py-1 px-1 font-semibold ss:text-xl text-base rounded-md duration-[400ms] hover:bg-[#9f643d] hover:text-white'>Rolls</Link>
                        </li>
                        <li className='flex'>
                            <Link to='/menu/drinks' className='bg-white text-secondary sm:px-10 ss:px-5 sm:py-4 py-1 px-1 font-semibold ss:text-xl text-base rounded-md duration-[400ms] hover:bg-[#9f643d] hover:text-white'>Drinks</Link>
                        </li>
                        <li className='flex'>
                            <Link to='/menu/desserts' className='bg-white text-secondary sm:px-10 ss:px-5 sm:py-4 py-1 px-1 font-semibold ss:text-xl text-base rounded-md duration-[400ms] hover:bg-[#9f643d] hover:text-white'>Desserts</Link>
                        </li>
                    </ul>

                    <div className='col-span-2 bg-cf-gradient flex justify-center items-center ss:mt-0 mt-5'>
                        <div className='picture rotate-12 hover:rotate-0 ease-in-out duration-500'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
