import { useEffect, useState } from "react";

export function usePopUp() {
    const [popUpOpen, setPopUpOpen] = useState(false);

    function togglePopUp() {
        setPopUpOpen(!popUpOpen);
    }

    

    return {
        popUpOpen,
        togglePopUp,
        setPopUpOpen
    };

}