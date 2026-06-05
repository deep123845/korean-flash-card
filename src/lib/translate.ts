const sinoDigitTranslations: Record<string, string> = {
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

const sinoPlaceTranslations: Record<string, string> = {
    "1": "십",
    "2": "백",
    "3": "천",
}

const nativeOnesTranslation: Record<string, string> = {
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

const nativeTensTranslations: Record<string, string> = {
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

const timeTranslations: Record<string, string> = {
    "AM": "오전",
    "PM": "오후",
    "m": "시",
    "h": "분",
}

export function sinoTranslate(number: number): string {
    let translatedList = [];
    const digits = number.toString().split("").reverse();
    for (const index in digits) {
        const digit = digits[index];

        if (index != "0") {
            translatedList.push(sinoPlaceTranslations[index]);

            if (digit == "1") {
                continue;
            }
        }

        if (digit != "0") {
            translatedList.push(sinoDigitTranslations[digit]);
        }
    }
    const translatedNumber = translatedList.reverse().join(" ");
    return translatedNumber;
}

export function nativeTranslate(number: number): string {
    let translatedList = [];
    const digits = number.toString().split("").reverse();
    for (const index in digits) {
        const digit = digits[index];
        if (index == "0") {
            translatedList.push(nativeOnesTranslation[digit]);
        } else if (index == "1") {
            translatedList.push(nativeTensTranslations[digit]);
        } else {
            return "Number too big"
        }
    }
    const translatedNumber = translatedList.reverse().join(" ");
    return translatedNumber;
}

export function timeTranslate(time: string): string {
    const hour = time.split(":")[0];
    const minute = time.split(":")[1].split(" ")[0];
    const ampm = time.split(":")[1].split(" ")[1];

    const hourText = nativeTranslate(Number.parseInt(hour)) + timeTranslations["h"];
    const minuteText = sinoTranslate(Number.parseInt(minute)) + timeTranslations["m"];

    return timeTranslations[ampm] + " " + hourText + " " + minuteText;
}
