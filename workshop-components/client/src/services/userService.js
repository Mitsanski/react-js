const url = "http://localhost:3030/jsonstore/users";

export default {
	async getAll() {
		const response = await fetch(url);
		const result = await response.json();
		const users = Object.values(result);
		return users;
	},
	async create(userData) {
		const { country, city, street, streetNumber, ...postData } = userData;

		postData.address = { country, city, street, streetNumber };
		postData.createdAt = new Date().toISOString();
		postData.updatedAt = new Date().toISOString();

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		});

		const result = await response.json();

		return result;
	},
	async getOne(userId) {
		const response = await fetch(url + `/${userId}`);
		const result = await response.json();
		return result;
	},
};
