const express = require('express');
const { body, query, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const constants = require('../common/constants');
const route = express.Router();
const {
  validationMiddleware,
  authorizationMiddleware,
} = require('../middlewares');
const { wishlistService } = require('../services');
const wishlist_itemService = require('../services/wishlist_item.service');
const { response } = require('../utils');

route.post(
  '/',
  [authorizationMiddleware, body('title').notEmpty(), validationMiddleware],
  async (req, res) => {
    const { title, note, status } = req.body;
    const { user } = req.res.locals;
    const uuid = uuidv4();
    await wishlistService.insert(uuid, title, note, status, user.id);
    const wishlist = await wishlistService.findById(uuid);
    if (wishlist.length === 0) {
      return response.errorResponse(res, constants.errors.INTERNAL_ERROR, 500);
    }
    return response.successResponse(res, {
      id: uuid,
      title,
      note,
      status,
    });
  }
);

route.put(
  '/:id',
  [authorizationMiddleware, body('title').notEmpty(), validationMiddleware],
  async (req, res) => {
    const { id } = req.params;
    const { title, note, status } = req.body;
    const { user } = req.res.locals;
    const wishlist = await wishlistService.findById(id);
    if (wishlist.length === 0) {
      return response.errorResponse(res, constants.errors.NOT_FOUND, 404);
    }
    if (wishlist[0].user_id != user.id) {
      return response.errorResponse(res, constants.errors.NOT_FOUND, 403);
    }
    await wishlistService.update(id, title, note, status);
    const wishlistResult = await wishlistService.findById(id);
    return response.successResponse(res, {
      id: wishlistResult[0].uuid,
      title: wishlistResult[0].title,
      note: wishlistResult[0].note,
      status: wishlistResult[0].status,
    });
  }
);

route.post(
  '/:id/items',
  [
    body().isArray(),
    body('*.title', 'title is required').notEmpty(),
    authorizationMiddleware,
  ],
  async (req, res) => {
    const { id } = req.params;
    const { user } = req.res.locals;
    const wishlist = await wishlistService.findById(id);
    if (wishlist.length === 0) {
      return response.errorResponse(res, constants.errors.NOT_FOUND, 404);
    }
    if (wishlist[0].user_id != user.id) {
      return response.errorResponse(res, constants.errors.NOT_FOUND, 403);
    }
    const itemIds = await wishlist_itemService.insertArray(
      req.body.map((item) => {
        return {
          title: item.title,
          note: item.note,
          wishlist_id: wishlist[0].id,
        };
      })
    );
    const items = await wishlist_itemService.findByIds(itemIds);
    return response.successResponse(
      res,
      items.map((item) => {
        return {
          title: item.title,
          id: item.id,
          note: item.note,
          status: item.status,
        };
      })
    );
  }
);

route.put(
  '/:id/items/:item_id',
  [authorizationMiddleware, body('title').notEmpty(), validationMiddleware],
  async (req, res) => {
    const { id, item_id } = req.params;
    const { user } = req.res.locals;
    const { title, note, status } = req.body;
    const wishlist = await wishlistService.findById(id);
    if (wishlist.length === 0) {
      return response.errorResponse(res, constants.errors.NOT_FOUND, 404);
    }
    if (wishlist[0].user_id != user.id) {
      return response.errorResponse(res, constants.errors.NOT_FOUND, 403);
    }
    const item = await wishlist_itemService.findByIds([parseInt(item_id)]);
    if (item.length === 0) {
      return response.errorResponse(res, constants.errors.NOT_FOUND, 404);
    }
    if (item[0].wishlist_id !== wishlist[0].id) {
      return response.errorResponse(res, constants.errors.BAD_REQUEST, 400);
    }
    const itemIds = await wishlist_itemService.update(
      item_id,
      title,
      note,
      status
    );
    const itemResult = await wishlist_itemService.findByIds([item_id]);
    return response.successResponse(res, {
      title: itemResult[0].title,
      id: itemResult[0].id,
      note: itemResult[0].note,
      status: itemResult[0].status,
    });
  }
);

route.get(
  '/',
  [
    authorizationMiddleware,
    query('offset').isNumeric(),
    query('limit').isNumeric(),
    validationMiddleware,
  ],
  async (req, res) => {
    const { offset, limit } = req.query;
    const { user } = req.res.locals;
    const numbers = await wishlistService.countAll(user.id);
    const wishlists = await wishlistService.findAll(user.id, offset, limit);
    return response.successResponse(res, {
      total: numbers[0].count,
      offset,
      limit,
      data: wishlists,
    });
  }
);

route.get('/:id', [authorizationMiddleware], async (req, res) => {
  const { id } = req.params;
  const { user } = req.res.locals;
  const wishlist = await wishlistService.findById(id);
  if (wishlist.length === 0) {
    return response.errorResponse(res, constants.errors.NOT_FOUND, 404);
  }
  if (wishlist[0].user_id != user.id) {
    return response.errorResponse(res, constants.errors.NOT_FOUND, 403);
  }
  const items = await wishlist_itemService.findAll(wishlist[0].id);
  return response.successResponse(res, {
    id: wishlist[0].uuid,
    title: wishlist[0].title,
    note: wishlist[0].note,
    createdAt: wishlist[0].created_at,
    updateAt: wishlist[0].updated_at,
    status: wishlist[0].status,
    items: items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        note: item.note,
        status: item.status,
      };
    }),
  });
});

module.exports = route;
