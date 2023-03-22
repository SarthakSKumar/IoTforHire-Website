export default function Contact() {
    return (
        <section
            id='catalogue'
            className='bg-white dark:bg-gray-900'
        >
            <div className='max-w-screen-xl px-4 py-14 pb-8 mx-auto lg:pb-16'>
                <h2 className='text-4xl py-2 font-bold text-center text-gray-900 dark:text-white'>
                    Contact Us
                </h2>
                <p className='max-w-2xl px-4 mx-auto mt-2 text-center text-gray-400 dark:text-gray-400'>
                    Reach out to us for{" "}
                    <span className='text-emerald-400 font-semibold'>Bookings</span> and{" "}
                    <span className='text-emerald-400 font-semibold'>Orders</span>
                </p>
                <div className='flex my-10 justify-around'>
                    <div className='flex border-2 mx-2 border-white flex-wrap justify-center'>
                        <h3 className='text-xl font-semibold text-gray-200'>
                            Bookings Open. Get your components now!
                        </h3>
                        <button className='text-lg font-semibold text-gray-800 p-3 bg-emerald-500 rounded-md'>
                            Order Now <i class='uil uil-favorite'></i>
                        </button>
                    </div>
                    <div className='flex border-2 p-4 mx-2 w-1/2 border-white flex-wrap justify-start'>
                        <div className='flex'>
                            <i class='text-6xl text-emerald-400 uil uil-location-point'></i>
                            <span className=' text-gray-400 text-md font-semibold'>
                                <span className='text-lg text-gray-300'>
                                    PES University Electronic City Campus
                                </span>
                                <br />
                                Konappana Agrahara, Electronic City, Bangalore - 560100
                            </span>
                        </div>
                        <div className='flex'>
                            <i class='text-5xl text-emerald-400 uil uil-envelope-check'></i>

                            <span className='text-md font-semibold text-gray-300'>
                                sskworld9742@gmail.com
                            </span>
                        </div>
                        <div className='flex'>
                            <i class='text-5xl text-emerald-400 uil uil-phone'></i>
                            <span className='text-md mx-2 font-semibold text-gray-300'>
                                +91 97429 13699 <br /> +91 96639 28924
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
