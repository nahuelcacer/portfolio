const ArrowIcon = (props) => (
    <svg
        width="64px"
        height="64px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(90)"
        {...props} // Permite personalizar atributos como `width`, `height`, `stroke`, etc.
    >
        <path
            d="M15 7L10 12L15 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowIcon;
