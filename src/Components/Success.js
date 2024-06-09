import { React, Component } from 'react'

export class Success extends Component {   
    render () {
        return (
            <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/3 h-[90%] p-5 backdrop-blur-sm shadow-2xl shadow-zinc-400 rounded-lg flex flex-col justify-evenly items-start'>
                <div className='w-full h-[10%] flex justify-center items-center text-[26px] md:text-3xl text-zinc-900 font-extrabold'>
                    <h1>Successful Submit</h1>
                </div>
                <div className='w-full h-[70%] flex flex-col justify-around text-center pt-10'>
                    <h2 className='text-xl tracking-widest leading-10'>Your Information have been submitted Successfully.</h2>
                    <div className='h-[70%] flex flex-col justify-evenly'>
                        <h5 className='text-sm leading-6'>We will send you a <h5 className='inline font-bold italic text-[15px]'>confirmation mail</h5> and if you have any updates about your data or have any questions you can contact our support team</h5>
                        <span>Email :  support.info@gmail.com </span>
                    </div>
                </div>
                <span className='mx-auto text-[10px] '>&copy; 2024 All rights reserved to 'National Info'</span>
            </div>
        )
    }
}

export default Success;