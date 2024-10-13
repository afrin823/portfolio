import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y ">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full ">
				<img src="https://i.ibb.co.com/LnMZrFn/afrin.png" alt="" />
				</div>
				<span className="self-center text-2xl font-semibold">Afrin Portfolio</span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase ">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase ">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/afrin025/" title="linkedin" className="flex items-center p-1 text-2xl">
                    <FaLinkedin />

					</a>
					<a rel="noopener noreferrer" target="_blank" href="https://github.com/afrin823" title="github" className="flex items-center p-1 text-2xl">
					<FaGithub />
					</a>
					<a rel="noopener noreferrer" target="_blank" href="https://x.com/Afrin682744" title="twitter" className="flex items-center p-1 text-2xl">
					<FaTwitter />
					</a>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center ">© 2024 Sabikun Nahar Afrin. All rights reserved.</div>
</footer>
        </div>
    );
};

export default Footer;