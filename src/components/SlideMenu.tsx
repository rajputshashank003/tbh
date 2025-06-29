import { Link } from 'react-router-dom';

const SlideMenu = () => {

    const data = [
        {
            name: 'abc',
            link: '/asdfsad'
        },
        {
            name: 'abc',
            link: '/asdfsad'
        },
        {
            name: 'abc',
            link: '/asdfsad'
        }
    ]
    return (
        <div className="absolute overflow-hidden top-0 left-0 h-screen w-full">
        <div className='absolute h-screen w-screen z-[999] bg-white/20 backdrop-blur-[22px] menu_bg left-[100%] top-0 pt-[200px] flex flex-col gap-2 tracking-tighter text-6xl uppercase p-4'>
            {
                data.map((el, ind) => (
                    <Link key={ind} to={el.link}>
                        <div className="overflow-hidden">
                            <div className='menu_options text-black hover:ml-8 hover:text-gray-700 transform duration-200 relative top-[3.5rem]'>
                                <small className='text-xl pr-2 pl-2'>
                                    0{ind + 1}. &nbsp;
                                </small>
                                {el.name}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
        </div>
    )
}

export default SlideMenu