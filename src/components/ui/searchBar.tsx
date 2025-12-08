import { Search } from "@deemlol/next-icons";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    stateValue?: string;
}

export function SearchBar({onChange, stateValue}: SearchBarProps){
    return(
        <div className="flex items-center w-150 gap-3 border bg-gray-200 border-gray-300 rounded-2xl px-3 py-3 ">
            <Search/>
            <input type="text" placeholder="Buscar documentos..." onChange={onChange} value={stateValue} className="w-full outline-none"/>
        </div>
    )
}