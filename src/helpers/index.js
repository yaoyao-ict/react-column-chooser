import _ from 'lodash';

export function findConfigWithId(categories, id) {
  let result = null;

  _.find(categories, (category) => {
    result = _.find(category.options, option => option.id === id);

    return !_.isEmpty(result);
  });

  return result;
}
