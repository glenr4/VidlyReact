import lodash from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = pageSize * (pageNumber - 1);

  return lodash(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
