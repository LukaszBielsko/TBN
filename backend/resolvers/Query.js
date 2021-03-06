const { Item, User, Product } = require('../mongo/schema');

const Query = {
  cartItem: async (obj, args, context, info) => {
    const cartItem = await Product.findById(args.id);
    return cartItem;
  },
  items: async () => {
    const items = await Item.find({});
    return items;
  },
  item: async (obj, args, context, info) => {
    const item = await Item.findById(args.id); // with id
    return item;
  },
  me: async (obj, args, context, info) => {
    if (!context.request.userId) return null;
    const user = await User.findById(context.request.userId);
    return user;
  },
  products: async () => {
    const products = await Product.find({});
    return products;
  },
  order: async (obj, { id }, context, info) => {
    if (!context.request.userId) return null;
    const user = await User.findById(context.request.userId);
    const order = await user.orders.id(id);
    return order;
  },
  allOrders: async (obj, args, context, info) => {
    // if (!context.request.userId) return null;
    // const user = await User.findById(context.request.userId);
    const user = await User.findById('5e1835fd1ef8621ccd64ae70');
    const orders = await user.orders;
    return orders;
  },
};

module.exports = Query;

/* TODO 
  info - last parameter in query has sth to do 
  with further queries, like getting only partial info
  on the user, not everything
*/
