const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const { name, time } = req.body;
  
      // User 모델을 사용하여 새로운 사용자 생성 및 저장
      const newUser = new User({
        name,
        time
      });
      await newUser.save();
  
      res.status(200).json({ message: '사용자가 성공적으로 저장되었습니다.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '서버 오류로 인해 사용자를 저장할 수 없습니다.' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['name', 'time'],
        order: [['time', 'ASC']]
      });
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '서버 오류로 인해 사용자 목록을 가져올 수 없습니다.' });
    }
  });
  
  module.exports = router;