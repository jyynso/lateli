

function Alert({title, body, showAlert} : { title: string, body: string, showAlert: boolean }) {
	return (
		<div className={`fixed top-0 p-4 ${showAlert ? 'opacity-100' : 'opacity-0' } transition-opacity`}>
			<h2 className="font-semibold">
				{title}
			</h2>
			<p className="text-gray-600">
				{body}
			</p>
		</div>
	);
}

export default Alert;