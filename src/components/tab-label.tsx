interface TabLabelProps {
    label: string
    selected: boolean
    onClick: () => void
}

export default function TabLabel({ label, selected, onClick }: TabLabelProps) {

    return (
        <>
            <button
                className={
                    "cursor-pointer p-2 text-white rounded-t-xl "
                    + (selected ? "bg-gray-800 hover:bg-gray-700 " : "bg-zinc-950 hover:bg-gray-900 border-1 border-y-0 border-gray-700")
                } onClick={() => { onClick() }}
            >
                {label}
            </button>
        </>
    )
}