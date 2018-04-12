const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const CollectionException = require('./collection/Exception');
const createCollection = require('./collection');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const collectionById = {};


app.route('/collection:cid/')
	.all((req, res, next) => {
		const { cid } = req.params;
		req.collection = collectionById[cid] = collectionById[cid] || createCollection();
		//setTimeout(() => next(), 3000);
		next();
	})
	.get((req, res) => {
		res.json(req.collection.get()).end();
	})
	.post((req, res) => {
		res.status(201).json(req.collection.post(req.body)).end();
	});

app.route('/collection:cid/:id')
	.all((req, res, next) => {
		const { cid } = req.params;
		req.collection = collectionById[cid] = collectionById[cid] || createCollection();
		//setTimeout(() => next(), 3000);
		next();
	})
	.put((req, res) => {
		if (req.body.id !== req.params.id) {
			res.status(400).end(`Ids don't match.`);
		} else {
			res.json(req.collection.put(req.body)).end();
		}
	})
	.delete((req, res) => {
		req.collection.delete(req.params.id);
		res.sendStatus(204);
	})
;

app.listen(8080, () => console.log('Listen...'));
