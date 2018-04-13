const productos = [{
	"id": 1,
	"nombre": "Camisa azul",
	"precio": 33,
	"img": "camisa_azul.jpg",
	"categoria": "Camisas"
},{
	"id": 2,
	"nombre": "Camisa cuadros",
	"precio": 31,
	"img": "camisa_cuadros.jpg",
	"categoria": "Camisas"
},{
	"id": 3,
	"nombre": "Camisa hojas",
	"precio": 28,
	"img": "camisa_hojas.jpg",
	"categoria": "Camisas"
},{
	"id": 4,
	"nombre": "Camisa llamativa",
	"precio": 39,
	"img": "camisa_llamativa.jpg",
	"categoria": "Camisas"
},{
	"id": 5,
	"nombre": "Camisa negra",
	"precio": 32,
	"img": "camisa_negra.jpg",
	"categoria": "Camisas"
},{
	"id": 6,
	"nombre": "Camisa playa",
	"precio": 32,
	"img": "camisa_playa.jpg",
	"categoria": "Camisas"
},{
	"id": 7,
	"nombre": "Camisa rosa",
	"precio": 32,
	"img": "camisa_rosa.jpg",
	"categoria": "Camisas"
}];



const byId = {};
productos.forEach(p => byId[p.id] = p);
let nextId = 0;

module.exports = () => ({
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
			return byId[id] = Object.create({}, item, { id });
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
});
