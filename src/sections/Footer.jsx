import { socialImgs } from '../constants';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>
                <div className="socials flex gap-4">
                    {socialImgs.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                            className="icon p-3 rounded-lg bg-[#0A0A0A] hover:bg-[#1A1A1A] transition"
                        >
                            {social.icon ? (
                                social.icon
                            ) : (
                                <img
                                    src={social.imgPath}
                                    alt={`${social.name} icon`}
                                    className="w-6 h-6"
                                />
                            )}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Muhammad Talha. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
