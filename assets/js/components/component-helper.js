export class ComponentHelper {
	static GetHtml(element, path) {
		new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", path);
			xhr.onload = () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(xhr.responseText);
				} else {
					reject(xhr.statusText);
				}
			};
			xhr.onerror = () => reject(xhr.statusText);
			xhr.send();
		}).then(responseContent => {
			element.innerHTML = responseContent;
		}, error => {
			console.error(error);
		});
	}
}