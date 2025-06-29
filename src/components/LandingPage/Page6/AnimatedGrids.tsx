const AnimatedGrids = () => {

    return (
        <div style={{ fontFamily: 'f3, serif' }} className="flex items-center justify-center h-[120vh] sm:h-[70vh] w-full">
            <div
                className="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-6 h-full w-full"
            >
                <div className=" grid_items_1 sm:row-span-1 md:row-span-1 sm:col-span-1 bg-neutral-100 p-6 h-full w-full rounded-[12px] overflow-hidden ">
                    <div>
                        <h2 className="text-xl font-semibold text-black">
                            Professional Identity Course
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">
                            James C. Williams – 49 Gigs
                        </p>
                    </div>
                </div>
                <div className="grid_items_2 sm:row-span-1 md:row-span-2 sm:col-span-1 bg-amber-300 h-full w-full rounded-[12px] overflow-hidden ">
                    <img
                        src="https://images.pexels.com/photos/8867435/pexels-photo-8867435.jpeg"
                        alt="Mentor 2"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="bg-white text-black text-xs px-2 py-1 rounded-full">
                            #Investments
                        </span>
                    </div>
                </div>
                <div className="grid_items_3 sm:row-span-1 relative md:row-span-2 sm:col-span-1 bg-amber-300 h-full w-full rounded-[12px] overflow-hidden ">
                    <img
                        src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                        alt="Mentor"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-white text-black text-xs px-2 py-1 rounded-full">
                            Success
                        </span>
                        <span className="bg-white text-black text-xs px-2 py-1 rounded-full">
                            Development
                        </span>
                    </div>
                </div>
                <div className="grid_items_4 sm:row-span-1 relative md:row-span-1 p-6 sm:col-span-1 bg-gray-100 h-full w-full rounded-[12px] overflow-hidden ">
                    <div>
                        <h2 className="text-xl font-semibold">Eco-Friendly Practices</h2>
                        <p className="text-sm mt-2">
                            Connecting with the right mentor has never been easier. Follow
                            these simple steps to start your journey
                        </p>
                    </div>
                    <div className="text-sm mt-4">Emily Wu – 35 Gigs</div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedGrids;
