import { cva } from "class-variance-authority";

// Base definition
const base = "inline-flex";

const button = cva(base, {
  variants: {
    intent: {
      primary: [
        "bg-green-400",
        "text-black",
        "border-transparent",
        "hover:bg-green-300",
        "rounded-md",
        "font-bold",
      ],
      secondary: [
        "bg-transparent",
        "text-white",
        "border-white",
        "hover:border-gray-100",
        "rounded-md",
        "font-bold",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-3", "px-6"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

function Button({ intent, size, className, ...rest }) {
  return <button {...rest} className={button({ intent, size, className })} />;
}

export default function Ex3_2() {
  return (
    <div className="grid h-screen place-content-center">
      <Button >Click me</Button>
    </div>
  );
}