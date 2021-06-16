const penumpang = [];
const tambahPenumpang = function (nama) {
	// jika angkot kosong
	if (!penumpang.length > 0) {
		const id = 1;
		const insertedAt = new Date().toISOString();
		const updatedAt = insertedAt;
		const newPenumpang = { id, nama, insertedAt, updatedAt };
		penumpang.push(newPenumpang);

		const isSuccess = penumpang.filter((p) => p.id == id).length > 0;

		if (isSuccess) {
			const response = {
				status: 'success',
				message: 'Penumpang berhasil naik',
				data: {
					idPenumpang: id,
				},
			};
			return response;
		}
		const response = {
			status: 'fail',
			message: 'Penumpang gajadi naik. Kelamaan bro ngetemnya',
		};
		return response;
	} else {
		for (let i = 0; i < penumpang.length; i++) {
			if (penumpang[i] == undefined) {
				const id = i + 1;
				const insertedAt = new Date().toISOString();
				const updatedAt = insertedAt;
				const newPenumpang = { id, nama, insertedAt, updatedAt };
				penumpang[i] = newPenumpang;
				const isSuccess = penumpang.filter((p) => p.id == id).length > 0;

				if (isSuccess) {
					const response = {
						status: 'success',
						message: 'Penumpang berhasil naik mengisi tempat yang kosong',
						data: {
							idPenumpang: id,
						},
					};
					return response;
				}

				const response = {
					status: 'success',
					message: 'Belum ada penumpang lagi bro',
				};
				return response;
			} else if (i == penumpang.length - 1) {
				const id = penumpang.length + 1;
				const insertedAt = new Date().toISOString();
				const updatedAt = insertedAt;
				const newPenumpang = { id, nama, insertedAt, updatedAt };
				penumpang.push(newPenumpang);

				const isSuccess = penumpang.filter((p) => p.id == id).length > 0;

				if (isSuccess) {
					const response = {
						status: 'success',
						message: 'Penumpang berhasil naik',
						data: {
							idPenumpang: id,
						},
					};
					return response;
				}

				const response = {
					status: 'fail',
					message: 'Penumpang belum naik',
				};
				return response;
			}
		}
	}
};

const hapusPenumpang = function (id) {
	if (!penumpang.length > 0) {
		console.log('Angkot masih kosong');
	} else {
		const index = penumpang.findIndex((p) => p.id === id);
		if (index !== -1) {
			penumpang[index] = undefined;
			const response = {
				status: 'success',
				message: 'Penumpang berhasil turun',
			};
			return response;
		}

		const response = {
			status: 'fail',
			message: 'Penumpang belum mau turun',
		};
		return response;
	}
};
