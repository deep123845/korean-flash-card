import { useEffect, useState } from "react"

const MAX_NUMBER = 9999;

const digitTranslations: Record<string, string> = {
    "1": "일",
    "2": "이",
    "3": "삼",
    "4": "사",
    "5": "오",
    "6": "육",
    "7": "칠",
    "8": "팔",
    "9": "구",
}

const placeTranslations: Record<string, string> = {
    "1": "십",
    "2": "백",
    "3": "천",
}

function translate(number: number): string {
    let translatedList = [];
    const digits = number.toString().split("").reverse();
    for (const index in digits) {
        if (index != "0") {
            translatedList.push(placeTranslations[index]);
        }

        const digit = digits[index];
        if (digit != "0") {
            translatedList.push(digitTranslations[digit]);
        }
    }
    const translatedNumber = translatedList.reverse().join(" ");
    return translatedNumber;
}

export default function SinoPage() {
    const [number, setNumber] = useState(0);
    const [numberVisible, setNumberVisible] = useState(false);
    const [flip, setFlip] = useState(false);
    const translatedNumber = translate(number);

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