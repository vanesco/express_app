// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

// var Board = require('./board');

// // 생성
// router.post('/', function(req, res) {
//     Board.create( {
//         email: req.body.email,
//         title: req.body.title,
//         message: req.body.message
//         },
//         function(err, board) {
//             if (err) return res.status(500).send("board 생성 실패.");
//             res.status(200).send(board);
//         });
// });
// // 전체 조회
// router.get('/', function(req, res) {
//     Board.find( {}, function(err, boards) {
//         if (err) return res.status(500).send("board 전체 조회 실패.");
//         res.status(200).send(boards);
//     });
// });
// // 조회
// router.get('/:id', function(req, res) {
//     Board.findById(req.params.id, function (err, board) {
//         if (err) return res.status(500).send("board 조회 실패");
//         if (!board) return res.status(404).send("board 없음.");
//         res.status(200).send(board);
//     });
// });
// // 삭제
// router.delete('/:id', function (req, res) {
//     Board.findByIdAndRemove(req.params.id, function (err, board) {
//         if (err) return res.status(500).send("board 삭제 실패");
//         res.status(200).send("Board "+ board.name +" 삭제됨.");
//     });
// });
// // 수정
// router.put('/:id', function (req, res) {    
//     Board.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, board) {
//         if (err) return res.status(500).send("board 수정 실패.");
//         res.status(200).send(board);
//     });
// });

// module.exports = router;