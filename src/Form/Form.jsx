const Form = () => {
    return (
        <div className="antialiased bg-gray-100">
            <div className="flex w-full min-h-screen justify-center items-center">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  bg-blue-900 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
                    <div className="flex flex-col space-y-8  justify-between ">
                        <div>
                            <h1 className="font-bold text-4xl tracking-wide ">Contact Us</h1>
                            <p className="pt-2 text-neutral-200 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quaerat?</p>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="inline-flex space-x-2">
                                <img  src={`https://i.ibb.co/cbk5c0R/icons8-call-20.png`} alt="" />
                                <span>+(123) 789 4560</span>
                            </div>
                            <div className="inline-flex space-x-2">
                                <img src={`https://i.ibb.co/Y8yySPL/icons8-mail-20.png`} alt="" />
                                <p>Contact@xyzwebsite.com</p>
                            </div>
                            <div className="inline-flex space-x-2">
                                <img src={`https://i.ibb.co/7Gkt2QH/icons8-location-20.png`} alt="" />
                                <p>11, Street 69, NYC</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 ">
                            <a href=""><img src={`https://i.ibb.co/dJZh9N0/icons8-facebook-20.png`} alt="" /></a>
                            <a href=""><img src={`https://i.ibb.co/FhdHtcz/icons8-twitter-20.png`} alt="" /></a>
                            <a href=""><img src={`https://i.ibb.co/zZZp0JP/icons8-linkedin-20.png`} alt="" /></a>
                            <a href=""><img src={`https://i.ibb.co/4KK4VKK/icons8-instagram-20.png`} alt="" /></a>
                        </div>
                    </div>
                <div className="relative">
                    <div className="absolute z-0 w-40 h-40 bg-blue-500 rounded-full -right-28 -top-28"></div>
                    <div className="absolute z-0 w-40 h-40 bg-blue-500 rounded-full -left-28 -bottom-16"></div>
                    <div className=" relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                        <form action="" className="flex flex-col space-y-4">
                            <div>
                            <label htmlFor="">Your Name</label>
                            <input type="text" placeholder="Your name" className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-600" />
                            </div>
                            <div>
                            <label htmlFor="">Email Address</label>
                            <input type="text" placeholder="Email Address" className=" ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-blue-600" />
                            </div>
                            <div>
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" cols="" rows="5" placeholder="Message" className=" ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                            </div>
                            <button className="inline-block self-end bg-blue-900 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>

                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Form;