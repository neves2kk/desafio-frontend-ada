import { Save } from "@deemlol/next-icons";
import { BackButton } from "./backButton";
import { CustomButton } from "./customButton";

interface MarkdownHeaderProps {
    docTitle: string;
    handleSave: () => void;
    handleBack?: () => void;
}

export function MarkdownHeader({docTitle,handleSave, handleBack}: MarkdownHeaderProps) {
    return(
        <div className="flex items-center justify-between px-8 py-4 shadow-lg">
            <div className="flex items-center gap-4">
                <BackButton handleBack={handleBack} />
                <h1 className="text-lg">{docTitle}</h1>
            </div>
            <CustomButton onClick={handleSave} text="Salvo" icon={<Save size={24} />} role="cancel" />
        </div>
    )
}