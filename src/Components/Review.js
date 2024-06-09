import { React, Component } from 'react'

export class Review extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render () {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props
        return (
            <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/3 h-[90%] p-5 backdrop-blur-sm shadow-2xl shadow-zinc-400 rounded-lg flex flex-col justify-evenly items-start'>
                <div className='w-full h-[10%] flex justify-center items-center text-[26px] md:text-3xl text-zinc-900 font-extrabold'>
                    <h1>Review</h1>
                </div>
                <div className='w-full h-[10%] mt-5' >
                    <div className='w-[80%] md:w-[85%] h-1/3 mx-auto flex justify-between pl-3 tracking-widest text-xs md:text-sm text-zinc-800'>
                        <h5>Basic</h5>
                        <h5>Bio</h5>
                        <h5>Review</h5>
                        <h5>Submit</h5>
                    </div>
                    <div className='w-[75%] md:w-[85%] h-2/3 mx-auto flex justify-evenly items-center'>
                        <div className='w-2 md:w-3 h-2 md:h-3 bg-zinc-600 border-2 border-zinc-50 rounded-full'></div>
                        <div className='w-12 md:w-16 h-0.5 bg-zinc-600 border border-zinc-50 rounded-full'></div>
                        <div className='w-2 md:w-3 h-2 md:h-3 bg-zinc-600 border-2 border-zinc-50 rounded-full'></div>
                        <div className='w-12 md:w-16 h-0.5 bg-zinc-600 border border-zinc-50 rounded-full'></div>
                        <div className='w-2 md:w-3 h-2 md:h-3 bg-zinc-600 border-2 border-zinc-50 rounded-full'></div>
                        <div className='w-12 md:w-16 h-0.5 bg-zinc-600 border border-zinc-50 rounded-full'></div>
                        <div className='w-2 md:w-3 h-2 md:h-3 bg-zinc-600 rounded-full'></div>
                    </div>
                </div>
                <div className='w-full h-[60%] flex'>
                    <div className=' w-1/3 h-[95%] flex flex-col justify-evenly items-start font-semibold text-zinc-600'>
                        <h3 className='text-lg font-extrabold mb-1'>Name</h3>
                        <h3 className='text-lg font-extrabold mb-1'>Email</h3>
                        <h3 className='text-lg font-extrabold mb-1'>Occupation</h3>
                        <h3 className='text-lg font-extrabold mb-1'>City</h3>
                        <h3 className='text-lg font-extrabold mb-1'>Bio</h3>
                    </div>
                    <div className='w-2/3 h-full flex flex-col justify-evenly font-semibold text-zinc-800 text-center pt-3'>
                        <div className='p-2 text-zinc-800 text-base rounded-lg bg-transparent border border-zinc-400 shadow-lg'>
                            { firstName + ' ' + lastName }
                        </div>
                        <div className='p-2 text-zinc-800 text-base rounded-lg bg-transparent border border-zinc-400 shadow-lg'>
                            { email }
                        </div>
                        <div className='p-2 text-zinc-800 text-base rounded-lg bg-transparent border border-zinc-400 shadow-lg'>
                            { occupation }
                        </div>
                        <div className='p-2 text-zinc-800 text-base rounded-lg bg-transparent border border-zinc-400 shadow-lg'>
                            { city }
                        </div>
                        <div className='p-2 h-16 text-zinc-800 text-xs rounded-lg bg-transparent border border-zinc-400 shadow-lg'>
                            { bio }
                        </div>
                    </div>
                </div>
                <div className='w-full h-[10%] flex justify-between'>
                    <button  
                        className='w-[49%] h-full rounded-lg bg-zinc-800 text-zinc-50 tracking-widest font-bold'
                        onClick={this.back}>
                            BACK
                    </button>
                    <button 
                        className='w-[49%] h-full rounded-lg bg-zinc-800 text-zinc-50 tracking-widest font-bold'
                        onClick={this.continue}>
                            SUBMIT
                    </button>
                </div>
            </div>
        )
    }
}

export default Review;