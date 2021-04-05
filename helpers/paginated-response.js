function PaginatedResponse(TItemClass) {
  // `isAbstract` decorator option is mandatory to prevent registering in schema
  class PaginatedResponseClass {
    items = TItemClass;

    total = "";
    hasMore = "";
  }
  return PaginatedResponseClass;
}

module.exports = PaginatedResponse;
