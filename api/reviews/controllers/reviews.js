"use strict";

const { sanitizeEntity } = require("strapi-utils");



/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx, populate) {
    const query = ctx.query || {};

    const entities = await strapi.query("reviews").find(
      {
        ...query,
        _limit: query._limit || 10,
        _start: query._start || 0,
        _sort: query._sort || "updated_at:desc",
        _where: { ...(query._where || {}), published_at_null: false },
      },
      populate
    );

    return entities
      .map((entity) => sanitizeEntity(entity, { model: strapi.models.reviews }))
      .map((entity) => ({ ...entity, ClientEmail: undefined }));
  },

  async create(ctx) {
    const entity = await strapi.services.reviews.create({
      ...ctx.request.body,
      published_at: null,
    });

    return sanitizeEntity(entity, { model: strapi.models.reviews });
  },
};
