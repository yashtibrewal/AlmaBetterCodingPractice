const express = require('express');

/**
 * 
 * @param {Error} err 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
function errorHandler(err, req, res, next) {
    console.log('Reached Error Handler')
    const statusCode = res.statusCode || 500;

    switch (statusCode) {

        case 404:
            res.json({
                title: 'Not Found',
                name: err.name,
                message: err.message
            })
            break;
        case 400:
            res.json({
                title: 'Bad Request',
                name: err.name,
                message: err.message
            })
            break;
        case 422:
            res.json({
                title: 'Unprocessable Entity',
                name: err.name,
                message: err.message
            })
            break;
        case 500:
            res.json({
                title: 'Internal Server Error',
                name: err.name,
                message: err.message
            })
            break;
        default:
            console.log('All good');
            next();
    }

}

module.exports = errorHandler;