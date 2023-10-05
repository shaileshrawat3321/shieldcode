import { useEffect, useRef, useState } from 'react'
import { ImLoop2 } from 'react-icons/im'
import { FaCopy } from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PasswordGenerator = () => {

    const [length, setLength] = useState(8);
    const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [uppercaseAllowed, setUppercaseAllowed] = useState(false);
    const [lowercaseAllowed, setLowerCaseAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef();

    // random password generator 
    const generateRandomPassword = () => {
        let generatedPassword = "";
        let setOfCharacters = "";
        if (numberAllowed) setOfCharacters += "0123456789"
        if (specialCharAllowed) setOfCharacters += "!@#$%^&*()_+[]{}|;:,.<>?"
        if (uppercaseAllowed) setOfCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (lowercaseAllowed) setOfCharacters += "abcdefghijklmnopqrstuvwxyz"

        for (let i = 0; i <= length; i++) {
            let charIndex = Math.floor(Math.random() * setOfCharacters.length)
            generatedPassword += setOfCharacters.charAt(charIndex)
        }
        setPassword(generatedPassword);
    }

    // copy to clipboard
    const copyToClipboard = () => {
        passwordRef?.current?.select()
        if (password.length === 0) {
            toast.error("Generate the password first", {
                autoClose: 1500
            })
        }
        else {
            window.navigator.clipboard.writeText(password)
            toast.success("Copied to clipboard", {
                autoClose: 1500
            })
        }
    }



    useEffect(() => {
        generateRandomPassword()
    }, [length, numberAllowed, specialCharAllowed, uppercaseAllowed, lowercaseAllowed])

    // console.log(numberAllowed)
    return (
        <>
            <main className='bg-extraText text-primartText min-h-screen flex flex-col justify-center items-center'>

                <section className="w-3/4 sm:w-2/3 md:w-1/2 px-2 text-center mx-auto flex flex-col justify-center gap-2 border-2 border-secondaryBg rounded-lg bg-extraBg">

                    {/* 1 viw and copy section*/}
                    <section className="w-full px-3 py-3 mb-1 flex flex-col sm:flex-row md:justify-between truncate">

                        {/* input bar */}
                        <span className='w-full sm:w-5/6 mb-2 sm:mr-2 py-3 bg-secondaryText rounded-md text-white'>

                            <input
                                type="text"
                                className=' bg-transparent w-5/6 text-md sm:text-lg lg:text-xl text-sm outline-none'
                                placeholder='Generate Password'
                                readOnly
                                value={password}
                                ref={passwordRef}
                            />
                        </span>

                        {/* copy button */}
                        <button
                            className='w-1/2 sm:w-1/4 mx-auto py-0.5 px-1 bg-cyan-600 text-gray-100 hover:bg-cyan-800 rounded-md hover:scale-105 transition duration-700 ease-in-out'
                            onClick={copyToClipboard}
                        >
                            Copy
                            <FaCopy className='inline-block pl-1' />
                        </button>
                    </section>

                    {/* check box heading */}
                    <h1 className="text-sm sm:text-2xl sm:font-bold mb-1 uppercase underline underline-offset-4 text-secondaryText">
                        Customize your password
                    </h1>

                    {/* checkbox sections */}
                    <section className="px-3 py-3 mb-1 flex flex-col justify-start gap-1 sm:gap-2">

                        {/* checkbox container */}

                        {/* slider */}
                        <div className='flex flex-col justify-around items-center'>
                            <input
                                type="range"
                                min={6}
                                max={20}
                                className='cursor-pointer '
                                value={length}
                                onChange={(e) => setLength(e.target.value)}

                            />
                        </div>
                        <label className='mb-1 text-secondaryText'>
                            Length: {length}
                        </label>

                        {/* numbers */}
                        <div>

                            <input
                                type="checkbox"
                                id='number'
                                className='mr-1'
                                onChange={() => setNumberAllowed((prev) => !prev)}
                            />
                            <label htmlFor="number" className="sm:text-xl">Numbers</label>
                        </div>

                        {/* capital letter */}
                        <div>
                            <input
                                type="checkbox"
                                id="blockLetter"
                                className="mr-1"
                                onChange={() => setUppercaseAllowed((prev) => !prev)}
                            />
                            <label htmlFor="blockLetter" className="sm:text-xl">Uppercase</label>
                        </div>

                        {/* small letter */}
                        <div>
                            <input
                                type="checkbox"
                                id="smallLetter"
                                className="mr-1"
                                onChange={() => setLowerCaseAllowed((prev) => !prev)}
                            />
                            <label htmlFor="smallLetter" className="sm:text-xl">Lowecase</label>
                        </div>

                        {/* spl characters */}
                        <div>
                            <input
                                type="checkbox"
                                id='specialCharacter'
                                className='mr-1'
                                onChange={() => setSpecialCharAllowed((prev) => !prev)}
                            />
                            <label htmlFor="specialCharacter" className="sm:text-xl">Special Characters</label>
                        </div>
                    </section>

                    {/* 4 regenerate div */}
                    <section className="w-full px-3 py-3">

                        {/* regenerate button */}
                        <button
                            className='px-2 sm:px-8 py-2 rounded-md bg-green-600 text-gray-200 hover:bg-green-800 hover:text-gray-100 hover:scale-110 transition duration-700 ease-in-out'
                            onClick={generateRandomPassword}
                        >Regenerate
                            <ImLoop2 className='inline-block pl-1' />
                        </button>
                    </section>
                </section>
            </main>
            <ToastContainer />
        </>
    )
}

export default PasswordGenerator;
