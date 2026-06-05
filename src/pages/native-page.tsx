import { useEffect, useState } from "react"
import { nativeTranslate } from "../lib/translate";

const MAX_NUMBER = 99;

export default function NativePage() {
    const [number, setNumber] = useState(0);
    const [numberVisible, setNumberVisible] = useState(false);
    const [flip, setFlip] = useState(false);
    const translatedNumber = nativeTranslate(number);

    function generateRandomNumber() {
        setNumber(Math.floor(Math.random() * (MAX_NUMBER)) + 1);
    }

    useEffect(() => {
        generateRandomNumber();
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 m-5 gap-5 text-5xl justify-items-center">
                <div className="border-1 p-3 pt-2 w-fit rounded-xl" onClick={() => { setFlip(!flip) }}>Flip</div>
                <div className="border-1 p-3 pt-2 w-fit rounded-xl" onClick={() => { generateRandomNumber() }}>Random</div>
                <div className="border-1 p-3 pt-2 w-fit rounded-xl" onClick={() => setNumberVisible(!numberVisible)}>Show Translation</div>
                <div className={"flex gap-5 " + (flip ? "flex-col-reverse" : "flex-col")}>
                    <div>{!flip ? translatedNumber : (numberVisible ? translatedNumber : "***")}</div>
                    <div>{flip ? number : (numberVisible ? number : "***")}</div>
                </div>
            </div>
        </>
    )
}