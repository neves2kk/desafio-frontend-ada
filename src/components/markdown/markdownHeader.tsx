import { Save } from "@deemlol/next-icons";
import { BackButton } from "../ui/backButton";
import { CustomButton } from "../ui/customButton";
import { SaveMarkdownButton } from "../ui/saveMarkdownButton";

interface MarkdownHeaderProps {
    docTitle: string;
    textButton: string;
    handleSave: () => void;
    handleBack?: () => void;
}

export function MarkdownHeader({docTitle,handleSave, handleBack, textButton}: MarkdownHeaderProps) {
    return(
        <div className="flex items-center justify-between px-8 py-5 shadow-lg">
            <div className="flex items-center gap-4">
                <BackButton handleBack={handleBack} />
                <h1 className="text-2xl font-bold">{docTitle}</h1>
            </div>
            <SaveMarkdownButton text={textButton} onClick={handleSave} />
        </div>
    )
}