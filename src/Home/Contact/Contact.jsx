
const Contact = () => {
    return (
        <section className="p-6 ">
	<form noValidate="" className="container  w-[80%] p-8 mx-auto space-y-6 rounded-md shadow ">
		<h2 className="w-full text-3xl font-bold text-center leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-yellow-400 " />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-yellow-400 " />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-yellow-400 "></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-yellow-400 focus:dark:ring-yellow-400 hover:dark:ring-yellow-400 dark:text-gray-50">Send</button>
		</div>
	</form>
</section>
    );
};

export default Contact;
