const ButtonSales = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`py-2 px-3.75 bg-white capitalize! text-coffee z-2 text-base font-semibold tracking-[2px] ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default ButtonSales;
