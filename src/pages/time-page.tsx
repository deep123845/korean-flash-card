import { useEffect, useState } from "react"
import { timeTranslate } from "../lib/translate";

const MAX_HOUR = 12;
const MAX_MINUTE = 59;

export default function TimePage() {
    const [number, setNumber] = useState("12:00");
    const [numberVisible, setNumberVisible] = useState(false);
    const [flip, setFlip] = useState(false);
    const translatedNumber = timeTranslate(number);

    function generateRandomNumber() {
        const hour = Math.floor(Math.random() * (MAX_HOUR)) + 1;
        const hourString = hour.toString();

        const minute = Math.floor(Math.random() * (MAX_MINUTE + 1));
        const minuteString = minute > 9 ? minute.toString() : "0" + minute.toString();

        const ampm = Math.random() > 0.5 ? "PM" : "AM"
        setNumber(hourString + ":" + minuteString + " " + ampm);
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