'use strict';

/**
 * Implement getMothersWithChildren function
 *
 * Function returns array of mothers with 'children' array inside each object
 *
 * @param {object[]} people
 *
 * @return {object[]}
 */
 function getMothersWithChildren(people) {
  const mothers = [];

  people.forEach((p) => {
    if (p.sex === 'f' && people.some((p1) => p1.mother === p.name)) {
      const children = [];

      people.forEach((p2) => {
        if (p2.mother === p.name) {
          children.push(p2);
        }
      });

      p.children = children;

      mothers.push(p);
    }
  })

  return mothers;
}

module.exports = getMothersWithChildren;
