import headingH1 from '../assets/heading-h1.svg'
import headingH2 from '../assets/heading-h2.svg'
import headingH3 from '../assets/heading-h3.svg'
import headingH4 from '../assets/heading-h4.svg'
import italic from '../assets/italic.svg'
import bold from '../assets/bold.svg'
import { Code, Italic, List } from '@deemlol/next-icons'

interface ToolbarProps {
    handleH1: () => void;
    handleH2: () => void;
    handleH3: () => void;
    handleH4: () => void;
    handleItalic: () => void;
    handleBold: () => void;
    handleCode: () => void;
    handleList: () => void;
}

export function Toolbar({handleH1, handleH2, handleH3, handleH4, handleItalic, handleBold, handleCode, handleList}: ToolbarProps){
    return(
        <nav className='flex gap-2 w-full px-6 py-6 border border-gray-300' >

            <div className='flex gap-6'>

                <button onClick={handleH1} className='cursor-pointer'>
                    <img className='h-auto w-6' src={headingH1.src}/>
                </button>

                <button onClick={handleH2} className='cursor-pointer'>
                    <img className='h-auto w-6' src={headingH2.src}/>
                </button>

                <button onClick={handleH3} className='cursor-pointer'>
                    <img className='h-auto w-6'  src={headingH3.src}/>
                </button>

                <button onClick={handleH4} className='cursor-pointer'>
                    <img className='h-auto w-6' src={headingH4.src}/>
                </button>

                <div className='w-0.5 h-10  bg-gray-300'></div>

            </div>

            <div className='flex gap-6'>

                <button onClick={handleItalic} className='cursor-pointer'>
                    <Italic/>
                </button>

                <button onClick={handleBold} className='cursor-pointer'>
                    <img className='h-auto w-6' src={bold.src}/>
                </button>   

                <button onClick={handleCode} className='cursor-pointer'>
                    <Code/>
                </button>   

                <div className='w-0.5 h-10  bg-gray-300'></div>

            </div>

            <div className="flex gap-6">
                <button onClick={handleList} className='cursor-pointer'>
                    <List/>
                </button>
            </div>


        </nav>
    )
}