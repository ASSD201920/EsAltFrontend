(function (){
    'use strict';

    const express = require("express")
        , endpoints = require("../endpoints")
        , helpers = require("../../helpers")
        , app = express();

    app.get("/BankController/createCust", function (req, res, next) {
        const op = 'operation=createCust&';
        const url = req.url.toString();
        console.log(url);
        const subUrl = url.substring(url.indexOf("?") + 1);
        console.log(subUrl);
        helpers.simpleHttpRequest(endpoints.customerUrl + op + subUrl, res, next);
    });

    module.exports = app;
}());