
module.exports = (initialData = []) => {
	const byId = {};
	initialData.forEach(p => byId[p.id] = p);

	let nextId = ( Math.max(...initialData.map(e => +e.id)) + 1 ) || 0;

	return {
		get: (id) => {
			if (id) {
				if (byId[id]) {
					return byId[id];
				} else {
					throw new CollectionException({ code: 404 });
				}
			} else {
				return Object.values(byId);
			}
		},
		post: (item) => {
			if (item.id) {
				throw new CollectionException({
					code: 400, message: `Can't create an item with an id.`
				})
			} else {
				const id = nextId++;
				return byId[id] = {
					...item,
					id
				};
			}
		},
		put: (item) => {
			if (!item.id) {
				throw new Error({
					code: 400, message: `Can't update an item without id.`
				});
			}

			if (!byId[item.id]) {
				throw new CollectionException({ code: 404 });
			}

			return byId[item.id] = item;
		},
		delete: (id) => {
			if (!byId[id]) {
				throw new CollectionException({ code: 404 });
			}

			delete byId[id];
		}
	};
};
