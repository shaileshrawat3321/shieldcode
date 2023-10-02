const PasswordGenerator = () => {
    return (
        <>
            <main className='bg-slate-900 text-gray-200 min-h-screen flex flex-col justify-center items-center'>

                <section className="w-3/4 sm:w-2/3 md:w-1/2 px-2 text-center mx-auto flex flex-col justify-center gap-2 border-2 border-gray-500 rounded-lg">

                    {/* 1 viw and copy section*/}
                    <section className="w-full px-3 py-3 mb-1 flex flex-col sm:flex-row md:justify-between truncate">

                        {/* input bar */}
                        <input
                            type="text"
                            className='w-full sm:w-3/4 mb-2 sm:mr-2 px-2 py-3 bg-transparent bg-gray-500 rounded-md text-gray-100 font-medium text-sm outline-none'
                        />

                        {/* copy button */}
                        <button className='w-2/5 sm:w-1/4 mx-auto py-0.5 bg-cyan-600 text-gray-100 hover:bg-cyan-800 rounded-md hover:scale-105 transition duration-700 ease-in-out'>
                            Copy
                        </button>
                    </section>

                    {/* 2 check box heading */}
                    <h1 className="text-sm sm:text-2xl sm:font-bold mb-1 uppercase underline underline-offset-4 text-gray-400">
                        Customize your password
                    </h1>

                    {/* 3 checkbox sections */}
                    <section className="px-3 py-3 mb-1 flex flex-col justify-start gap-1 sm:gap-2">

                        {/* checkbox container */}

                        {/* slider */}
                        <div className='flex flex-col justify-around items-center'>
                            <input
                                type="range"
                                min={6}
                                max={20}
                                className='cursor-pointer'
                            />
                        </div>

                        {/* numbers */}
                        <div>

                            <input
                                type="checkbox"
                                id='number'
                                className='mr-1'
                            />
                            <label htmlFor="number">Numbers</label>
                        </div>

                        {/* spl characters */}
                        <div>
                            <input
                                type="checkbox"
                                id='specialCharacter'
                                className='mr-1'
                            />
                            <label htmlFor="specialCharacter">Special Characters</label>
                        </div>
                    </section>

                    {/* 4 regenerate div */}
                    <section className="w-full px-3 py-3">

                        {/* regenerate button */}
                        <button className='bg-green-600 text-gray-200 px-2 sm:px-8 py-2 rounded-md hover:bg-green-800 hover:text-gray-100 hover:scale-110 transition duration-700 ease-in-out'>Regenerate </button>
                    </section>
                </section>
            </main>
        </>
    )
}

export default PasswordGenerator;
