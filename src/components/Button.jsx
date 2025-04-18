const Button = ({ text, className, id, download }) => {
    return (
        <a
            href={download ? download : '#'} // if download provided, set href to it
            onClick={(e) => {
                if (!download) {
                    e.preventDefault(); // Stop jumping only if not downloading
                    const target = document.getElementById(id);
                    if (target && id) {
                        const offset = window.innerHeight * 0.15;
                        const top =
                            target.getBoundingClientRect().top +
                            window.pageYOffset -
                            offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }
            }}
            download={download ? true : undefined} // enable download attribute if needed
            className={`${className ?? ''} cta-wrapper`}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};

export default Button;
