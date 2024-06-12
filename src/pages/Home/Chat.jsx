import React, { useState } from 'react'

const Chat = () => {
    const [clickChat, setClickChat] = useState(false)
    const chatClick = () => {
        setClickChat(!clickChat)
    }
    return <>
        <div className={` z-[29] ${clickChat ? "" : "hidden"} absolute top-[90%] right-64 flex justify-center items-center`}>
            <div className="bg-red-500 shadow-md shadow-slate-400 rounded-2xl h-[50%] w-[24rem] p-10 ">
                <div className="flex justify-end">
                    <button onClick={chatClick}><i class="bi bi-x-lg"></i></button>
                </div>
                <div className="text-center">
                    <p className="text-2xl">web developemnt</p>
                    <p className="mt-3">"Web development involves creating</p>
                </div>
                <div className="border border-dashed mt-2"></div>
                <div className='flex space-x-5 mt-6  relative'>
                    <div className='h-8 rounded-full bg-white w-8 mt-4'></div>
                    <div class="border  border-gray-300 bg-white h-10 mt-4 p-2 rounded-sm text-sm text-black" type="search">Lorem ipsum dolor sit  ,AJGKJ amet.

                    </div>

                </div>
                <div className='flex space-x-5 mt-6  relative'>
                    <div class="border  border-gray-300 p-2 bg-white h-10 mt-4 rounded-sm text-sm text-black" type="search">Lorem ipsum dolor sit  ,AJGKJ amet.
                    </div>

                    <div className='h-8 rounded-full bg-white w-8 mt-4'></div>
                </div>
                <div>
                    <div className="">
                        {/* start */}
                        <div className="mt-8 flex w-full" onClick={e => e.stopPropagation()}>
                            <div class="flex rounded-lg shadow-sm">
                                <input type="text" class="py-1 px-4 w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:ring-blue-500 text-black" />
                                <button type="button" class="w-[3rem] h-[2rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-white text-black">
                                    <i class="bi bi-send-fill"></i>
                                </button>
                            </div>
                            <i class="bi bi-paperclip text-2xl ms-4 rotate-90"></i>
                        </div>
                        {/* end */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Chat