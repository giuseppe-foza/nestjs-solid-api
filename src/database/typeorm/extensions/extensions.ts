import { SelectQueryBuilder } from 'typeorm';

declare module 'typeorm/query-builder/SelectQueryBuilder' {
  interface SelectQueryBuilder<Entity> {
    when(
      value: any,
      callback?: (qb: this, value?: any) => SelectQueryBuilder<Entity>,
      defaultCallback?: (qb: this, value?: any) => SelectQueryBuilder<Entity>,
    ): SelectQueryBuilder<Entity>;
  }
}

SelectQueryBuilder.prototype.when = function <Entity>(
  this: SelectQueryBuilder<Entity>,
  value: any,
  callback?: (
    qb: SelectQueryBuilder<Entity>,
    value?: any,
  ) => SelectQueryBuilder<Entity>,
  defaultCallback?: (
    qb: SelectQueryBuilder<Entity>,
    value?: any,
  ) => SelectQueryBuilder<Entity>,
): SelectQueryBuilder<Entity> {
  if (typeof value === 'function') {
    value = value(this);
  }

  if (value) {
    return callback ? callback(this, value) : this;
  } else {
    return defaultCallback ? defaultCallback(this, value) : this;
  }
};
