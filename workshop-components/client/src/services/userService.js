const url = "http://localhost:3030/jsonstore/users";

export default {
	async getAll() {
		try {
			const res = await fetch(url);

			if (!res.ok) {
				throw new Error("Something went wrong while fetching");
			}
			const data = await res.json();
			const users = Object.values(data);
			return users;
		} catch (err) {
			console.log(err.message);
		}
	},
	async getOne(id) {
		try {
			const res = await fetch(`${url}/${id}`);
			if (!res.ok) {
				throw new Error("Sum went wrong");
			}

			const user = await res.json();

			return user;
		} catch (error) {
			console.log(error.message);
		}
	},
	async createUser(data) {
		const postData = {
			...data,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};
		try {
			const req = await fetch(url, {
				method: "POST",
				body: JSON.stringify(postData),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!req.ok) {
				throw new Error("Unsuccessful user create");
			}

			const response = req.json();

			return response;
		} catch (error) {
			console.log(error);
		}
	},
	async deleteUser(id) {
		try {
			const res = await fetch(`${url}/${id}`, {
				method: "DELETE",
			});

			if (!res.ok) {
				throw new Error("Botched the deleting");
			}
			const data = await res.json();

			return data;
		} catch (error) {
			console.log(error.message);
		}
	},
	async editUser(id, data) {
		try {
			const req = await fetch(`${url}/${id}`, {
				method: "PATCH",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "applicaiton/json",
				},
			});

			if (!req.ok) {
				throw new Error("Unsuccessful user create");
			}

			const response = req.json();

			return response;
		} catch (err) {
			console.log(err.message);
		}
	},
};
