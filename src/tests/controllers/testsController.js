'use strict';

const manager = require('../models/manager'),
    fileManager = require('../models/fileManager');

module.exports = {
    upsertTest,
    getTest,
    deleteTest,
    getTests,
    getFile,
    getTestRevisions
};

async function upsertTest(req, res, next) {
    try {
        const result = await manager.upsertTest(req.body, req.params.test_id);
        return res.status(201).json(result);
    } catch (err){
        return next(err);
    }
}

async function getFile(req, res, next) {
    try {
        const result = await fileManager.getFile(req.params.file_id, req.query.format);
        return res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
}

async function getTest(req, res, next) {
    try {
        const result = await manager.getTest(req.params.test_id);
        return res.status(200).json(result);
    } catch (err){
        return next(err);
    }
}

async function deleteTest(req, res, next) {
    try {
        await manager.deleteTest(req.params.test_id, req.body);
        return res.status(200).json();
    } catch (err){
        return next(err);
    }
}

async function getTests(req, res, next) {
    try {
        const result = await manager.getTests();
        return res.status(200).json(result);
    } catch (err) {
        return next(err);
    }
}

async function getTestRevisions(req, res, next) {
    try {
        const result = await manager.getAllTestRevisions(req.params.test_id);
        return res.status(200).json(result);
    } catch (err){
        return next(err);
    }
}
