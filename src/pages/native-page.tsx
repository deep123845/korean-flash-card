import { useEffect, useState } from "react"

const MAX_NUMBER = 99;

const onesTranslation: Record<string, string> = {
    "1": "하나",
    "2": "둘",
    "3": "셋",
    "4": "넷",
    "5": "다섯",
    "6": "여섯",
    "7": "일곱",
    "8": "여덟",
    "9": "아홉",
}

const tensTranslations: Record<string, string> = {
    "1": "열",
    "2": "스물",
    "3": "서른",
    "4": "마흔",
    "5": "쉰",
    "6": "여순",
    "7": "일흔",
    "8": "여든",
    "9": "아훈",
}

function translate(number: number): string {
    let translatedList = [];
    const digits = number.toString().split("").reverse();
    for (const index in digits) {
        const digit = digits[index];
        if (index == "0") {
            translatedList.push(onesTranslation[digit]);
        } else if (index == "1") {
            translatedList.push(tensTranslations[digit]);
        } else {
            return "Number too big"
        }
    }
    const translatedNumber = translatedList.reverse().join(" ");
    return translatedNumber;
}

export default function NativePage() {
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