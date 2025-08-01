import { Link } from 'react-router-dom';
import Button from './Button';
import { useAppBar } from '../Contexts/UseAppBar';
import { data } from '../utils/slidemenu_data';

const SlideMenu = () => {
    const { isOpen } = useAppBar();

    return (
        <div style={{ pointerEvents: isOpen ? undefined : 'none' }} className="absolute md:hidden overflow-hidden z-[999] top-0 left-0 h-screen w-full">
            <div className='absolute h-screen w-screen  bg-[#F8F4F2]/20 backdrop-blur-[20px] menu_bg left-[100%] top-0 pt-[200px] flex flex-col gap-2 tracking-tighter  uppercase p-4'>
                {
                    data.map((el, ind) => (
                        <Link key={ind} to={el.link}>
                            <div style={{ fontFamily: 'f6, serif'}} className="overflow-hidden">
                                <div className='menu_options hover:ml-8 hover:text-gray-700 transform duration-200 text-[40px] relative top-[3.5rem]'>
                                    <small className='text-xl pr-2 pl-2'>
                                        0{ind + 1}. &nbsp;
                                    </small>
                                    {el.name}
                                </div>
                            </div>
                        </Link>
                    ))
                }
                <div className="flex flex-row absolute bottom-[10%] right-10 gap-[16px] md:hidden col-span-4 justify-center items-center">
                    <Button variant="Empty" >
                        Login
                    </Button>
                    <Button variant="Filled" >
                        Join Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SlideMenu