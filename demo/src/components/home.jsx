import React from 'react'; // Import React if you haven't already

function Home() { // Capitalized component name
    return (
        <div class='from'>
            <div class="bg-cyan-900 text-black p-4  text-center">
                {/* This is a comment */}
            </div>
            <div class="bg-white pt-8 pb-8 text-black font-extrabold text-center text-5xl font-serif border-solid border-2 border-black-500 pb-3">
                ALL The Food
            </div>
            <div class="bg-white p-4 text-slate-600 font-serif text-xl border-2 border-black-500 pb-3">
                <a href="https://www.allthefood.ie/neighbourhood-guides" class="no-underline hover:underline ... pl-20">Neighbourhoods</a>
                <a href="https://www.allthefood.ie/neighbourhood-guides" class="no-underline hover:underline ... pl-20">Reviews</a>
                <a href="https://www.allthefood.ie/neighbourhood-guides" class="no-underline hover:underline ... pl-20 font-xs">Resturants</a>
                <a href="https://www.allthefood.ie/neighbourhood-guides" class="no-underline hover:underline ... pl-20">HotelGudies</a>
                <a href="https://www.allthefood.ie/neighbourhood-guides" class="no-underline hover:underline ... pl-20">TravelGudies</a>
                <a href="https://www.allthefood.ie/neighbourhood-guides" class="no-underline hover:underline ... pl-20">All-IreLands Map</a>
                <a href="https://www.allthefood.ie/neighbourhood-guides" class="no-underline hover:underline ... pl-20">News</a>
            </div>
            <div className="bg-cover image-full  ">
                <div className="relative text-center text-white">
                    <img src="/assets/demo.jpg " alt="Description" />
                    <div>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-rap  bg-black bg-opacity-50 ">
                            <p className="font-extrabold text-small ">Dublin Restaurant Guides & Reviews</p>
                            <h1 className="font-extrabold text-7xl mt-4">Neighbourhoods</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white bg-fixed">
                <div class="flex flex-row pl-20">
                    <div class="basis-1/1 pt-20 pb-20 pr-20">
                        <div className="bg-left-top-10 image-full ">
                            <div className="relative text-center text-white">
                                <img src="/assets/map.jpg" alt="Description" />

                            </div>
                        </div>
                    </div>
                    <div class="basis-1/1 pt-20 pb-20 pl-50 pr-20">
                        <p className="font-extrabold text-5xl text-black pb-10">Where to Eat</p>
                        <p className="font-light text-2xl text-justify pb-10">
                            Dublin doesn't have the same easy-to-navigate neighborhoods as say,
                            New York - but we've tried to split the city up into easily manageable chunks so wherever you're headed you can find the best places around for breakfast, brunch, lunch, dinner and dessert.
                        </p>
                        <p className="font-light text-2xl text-wrap">
                            From Argentinean in Portobello, to Calabrian in Stoneybatter, to a raw seafood bar in Terenure, restaurants and cafés here have the ATF seal of approval, so wherever you find yourself in the city you can search for the best eating experiences around.
                        </p>


                    </div>

                </div>
            </div>

            <div className="bg-white">
                {/* Image flex */}
                <div className="flex flex-row ">
                    <div class="basis-1/4 md:basis-1/3 pt-20 pb-16 pr-14 pl-10" >
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-2/4 md:basis-1/3 pt-20 pb-10 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-3/4 md:basis-1/3 pt-20 pb-16 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-4/4  md:basis-1/3 pt-20 pb-20 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>


                </div>
            </div>

            <div className="bg-white">
                {/* Image flex */}
                <div className="flex flex-row ">
                    <div class="basis-1/4 md:basis-1/3 pt-20 pb-20 pr-14 pl-10" >
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-2/4 md:basis-1/3 pt-20 pb-20 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-3/4 md:basis-1/3 pt-20 pb-20 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-4/4  md:basis-1/3 pt-20 pb-20 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>


                </div>
            </div>

            <div className="bg-white">
                {/* Image flex */}
                <div className="flex flex-row ">
                    <div class="basis-1/4 md:basis-1/3 pt-20 pb-20 pr-14 pl-10" >
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-2/4 md:basis-1/3 pt-20 pb-20 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-3/4 md:basis-1/3 pt-20 pb-20 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>
                    <div class="basis-4/4  md:basis-1/3 pt-20 pb-20 pr-20">
                        <div className="relative text-center text-white">
                            <img src="/assets/map.jpg" alt="Description" />

                        </div>
                    </div>


                </div>
            </div>

            <div className="bg-cyan-900 bg-fixed ">
                <div class="flex flex-row pl-4 pr-10">
                    <div className="bg-right-top text-left font-serif pt-4 pb-9">Join ATF Insiders
                        <div class="basis-1/1 pt-24 pr-18">

                            <p className="font-serif text-8xl pb-12 pl-7 pr-4 ">
                                Make the Most of Every Meal.</p>
                            <div className="btn-ghost  bg-right-bottom text-center font-bold text-xl pb-0  ">Join us  </div>
                        </div>
                    </div>
                    <div class="basis-1/1 pt-32 pl-44 ">
                        <div className="bg-right-bottom pl-20 ">
                            <img src="/assets/food.jpg" alt="Description" />

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white pt-10 pb-10 pl-10 pr-10 '>
                <div className="bg-teal-400">
                    <div className="font-serif text-center text-white pt-10 text-3xl">
                        Stay in touch
                    </div>
                    <div className="text-white font-extralight text-center pt-2 text-xl">
                        Get news, reviews and guides to eating out in Dublin direct to your inbox
                    </div>
                    <div className="flex justify-center pt-4 pb-6">
                        <input
                            type="text"
                            className="text-center w-[600px] px-28 py-3 text-lg pl-40 rounded-full border-2 border-gray-500 outline-none transition"
                            placeholder="Share your email"
                        />

                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <div class="flex flex-row pl-10 pr-18">
                    <div class="basis-1/1">

                        <p className="font-serif font-semibold text-white text-4xl pt-16 pl-10 pr-10 ">
                            Become an Insider
                        </p>
                        <p className="font-serif text-4xl pt-10 pb-10 pl-10 pr-10 ">
                            Get access to the best restaurants, bars, and food Dublin has to offer.
                        </p>
                        <div className='btn-square btn-ghost text-white text-center pl-40'>Join </div>
                    </div>

                    <div class="basis-1/1 pl-32">
                        <div className="bg-full image-full ">
                            <img src="/assets/food2.jpg" alt="Description" />

                        </div>
                    </div>
                </div>

                <div className='bg-white pb-10'>
                    <div className='border-spacing-4'>
                        <div className='flex flex-row'>
                            <div class="basis-1/4 pt-20 pb-20 pl-10 pr-10">
                                <div class='font-semibold text-black text-4xl text-center'>All The Food
                                </div>
                            </div>
                            <div class="basis-1/2 pl-16">
                                <div class="font-bold text-cyan-800 text-xl pt-16 ">Explore </div>
                                <div class="font-light text-black text-lg pt-2 pb-2">ATF Insider</div>
                                <div class="font-light text-black text-lg pt-2 pb-2">About</div>
                                <div class="font-light text-black text-lg pt-2 pb-2">Industry</div>
                                <div class="font-light text-black text-lg pt-2 pb-2">shop</div>
                            </div>
                            <div class="basis-1/3">
                                <div class="font-bold text-cyan-800 text-xl pt-16">Company</div>
                                <div class="font-light text-black text-lg pt-2 pb-2">ATF Insider</div>
                                <div class="font-light text-black text-lg pt-2 pb-2">About</div>
                                <div class="font-light text-black text-lg pt-2 pb-2">Industry</div>
                                <div class="font-light text-black text-lg pt-2 pb-2">shop</div>
                            </div>
                            <div class="basis-1/4">
                                <div class="font-bold text-cyan-800 text-xl pt-16">Say Hello
                                    <div className='text-lg text-black'>
                                        <p>We are always happy to connect with our community. Drop us a line with any questions or queries.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='bg-white border-solid border-2 border-black'>
                    <div className="text-black font-sans text-center text-14 pt-14">
                    © 2023 by All the Food
                    </div>
                    <div className="text-black font-sans text-center text-14">
                    Policies | All Rights Reserved
                    </div>
                    <div className="text-black font-sans bottom-center-left">
                    Site by Act One Media
                    </div>
                </div>

            </div>

        </div >

    );
}

export default Home; // Exporting the component with the correct name
