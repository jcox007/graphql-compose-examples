import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { UserTC } from './models/user';

// get list of all 13 Resolvers (findById, updateMany and others)
// generated by graphql-compose-mongoose from the mongoose User model
const resolvers = UserTC.getResolvers();


// create GraphQL Schema with all available resolvers for User Type
const graphqlSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      userById: resolvers.get('findById').getFieldConfig(),
      userByIds: resolvers.get('findByIds').getFieldConfig(),
      userOne: resolvers.get('findOne').getFieldConfig(),
      userMany: resolvers.get('findMany').getFieldConfig(),
      userCount: resolvers.get('count').getFieldConfig(),
      userConnection: resolvers.get('connection').getFieldConfig(),
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      userCreate: resolvers.get('createOne').getFieldConfig(),
      userUpdateById: resolvers.get('updateById').getFieldConfig(),
      userUpdateOne: resolvers.get('updateOne').getFieldConfig(),
      userUpdateMany: resolvers.get('updateMany').getFieldConfig(),
      userRemoveById: resolvers.get('removeById').getFieldConfig(),
      userRemoveOne: resolvers.get('removeOne').getFieldConfig(),
      userRemoveMany: resolvers.get('removeMany').getFieldConfig(),
    },
  }),
});

export default graphqlSchema;