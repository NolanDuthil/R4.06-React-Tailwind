function Button({ children, className, ...restProps }) {
    return (
        <button
            className={`rounded-lg bg-emerald-600 ${className}`}
            {...restProps}
        >
            {children}
        </button>
    );
}

export default function Ex1_2() {
    return (
        <div className="">
            <Button className="bg-red-600"></Button>
        </div>
    );
}