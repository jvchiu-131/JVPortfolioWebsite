import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-black font-semibold",
  variants: {
    color: {
      violet: "from-[#3f0071] via-[#9d174d] to-[#500724]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      neonPinkPurple: "from-[#FF1CF7] via-[#E700FF] to-[#b249f8]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    
      bgText: '#0f1626',
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-5xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "neonPinkPurple",
        "foreground",
       
        "bgText",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b tracking-tight animate-shimmer",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    color: {
      violet: "from-[#3f0071] via-[#9d174d] to-[#500724]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      neonPinkPurple: "from-[#FF1CF7] via-[#E700FF] to-[#b249f8]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      bgText: '#0f1626',
    },
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "neonPinkPurple",
        "foreground",
       
        "bgText",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b tracking-tight animate-shimmer",
    },
  ],
  defaultVariants: {
    fullWidth: true,
  },
});
