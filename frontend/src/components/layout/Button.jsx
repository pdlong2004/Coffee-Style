const Button = ({ children, className = '', ...props }) => {
    return (
        <button
            className={`px-6 py-4.5 bg-white text-black text-[12px] uppercase font-semibold tracking-[2px] cursor-pointer ${className} hover:opacity-90`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
