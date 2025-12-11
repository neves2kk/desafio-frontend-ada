import { LuHeading1, LuHeading2 , LuHeading3, LuHeading4, LuBold} from "react-icons/lu";
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
                    <LuHeading1 size={24}/>
                </button>

                <button onClick={handleH2} className='cursor-pointer'>
                    <LuHeading2 size={24}/>
                </button>

                <button onClick={handleH3} className='cursor-pointer'>
                    <LuHeading3 size={24}/>
                </button>

                <button onClick={handleH4} className='cursor-pointer'>
                    <LuHeading4 size={24}/>
                </button>

                <div className='w-0.5 h-10 border  border-gray-300'/>

            </div>

            <div className='flex gap-6'>

                <button onClick={handleItalic} className='cursor-pointer'>
                    <Italic/>
                </button>

                <button onClick={handleBold} className='cursor-pointer'>
                    <LuBold size={24}/>
                </button>   

                <button onClick={handleCode} className='cursor-pointer'>
                    <Code/>
                </button>   

                <div className='w-0.5 h-10 border  border-gray-300'/>

            </div>

            <div className="flex gap-6">
                <button onClick={handleList} className='cursor-pointer'>
                    <List/>
                </button>
            </div>


        </nav>
    )
}