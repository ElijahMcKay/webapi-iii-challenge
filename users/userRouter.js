const express = require('express');

const router = express.Router();

const posts = require('../data/seeds/03-posts'); 

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const ID = req.params.id; 
    posts.forEach(post => {
        if(post.user_id === ID) {
            req.user = post; asdf
        } else {
            res.status(400).json({
                message: 'invalid user id'
            })
        }
    })
    next(); 
}

function validateUser(req, res, next) {
    const body = req.body
    const name = req.name
    if(body === {}) {
        res.status(400).json({
            message: 'missing user data'
        }) 
    } else if(name === {}) {
        res.status(400).json({
            message: 'missing required name field'
        })         
    }
    next(); 
};

function validatePost(req, res, next) {

};

module.exports = router;
