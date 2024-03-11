function Button({ children, className, ...restProps }) {
    return (
        <button
            className={`rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500 active:bg-emerald-700 ${className} `}
            {...restProps}
        >
            {children}
        </button>
    );
}

export default function Ex1_2() {
    return (
        <div className="grid h-screen place-content-center">
            <Button className="bg-blue-500">Click Me</Button>
        </div>
    );
}