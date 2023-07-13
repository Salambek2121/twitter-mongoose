const { json } = require('express');
const User = require('../model/user.model');

module.exports.userController = {
    createUser: (req,res) => {
        User.create ({
            nickname: req.body.nickname,
            save:req.body.save
        }).then((data) => {
            res.json(data)
        })
    },


    deleteUser: (req,res) => {
        User.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        });

    },

    getUser: (req,res) => {
        User.find().populate('save').then((data) => {
            res,json(data)
        })
    },

    getUserId: (req,res) => {
        User.findById(req.params.id).populate('save').then((data) => {
            res.json(data)
        })

        
    },


    patchSave: (req,res) => {
        User.findByIdAndUpdate(req.params.id,req.body).then((data) => {
            res.json(data)
        })
    }
}