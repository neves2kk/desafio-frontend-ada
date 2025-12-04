import { ArrowLeft } from "@deemlol/next-icons";

export function BackButton({handleBack}: {handleBack?: () => void}) {
    return (
        <button onClick={handleBack} className="cursor-pointer">
            <ArrowLeft size={24} />
        </button>
    );

}