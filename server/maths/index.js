const { Router } = require('express');
const math = require('./math');

router = new Router();

const sendResponse = (req, res) => {
  if (req.payload) {
    return res.json(req.payload);
  }
  return res.json({});
};

router.get('/', (req, res) => {
  req.payload = "Hello World!";
  sendResponse(req, res);
});

router.post('/add', (req, res) => {
  const { number_1, number_2 } = req.body;
  req.payload = { result: math.sum(number_1, number_2)};
  sendResponse(req, res);
});

router.post('/multiply', (req, res) => {
  const { number_1, number_2 } = req.body;
  req.payload = { result: math.mul(number_1, number_2)};
  sendResponse(req, res);
});

router.post('/divide', (req, res) => {
  const { number_1, number_2 } = req.body;
  req.payload = { result: math.div(number_1, number_2)};
  sendResponse(req, res);
});

router.post('/subtract', (req, res) => {
  const { number_1, number_2 } = req.body;
  req.payload = { result: math.sub(number_1, number_2)};
  sendResponse(req, res);
});

router.post('/square', (req, res) => {
  const { number_1 } = req.body;
  req.payload = { result: math.sqr(number_1)};
  sendResponse(req, res);
});

module.exports = router;