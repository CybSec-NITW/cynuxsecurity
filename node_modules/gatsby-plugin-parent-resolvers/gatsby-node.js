const { parentPassthrough, parentResolverPassthrough } = require("./index");

exports.createSchemaCustomization = ({ actions, schema, store }) => {
  const { fieldExtensions } = store.getState().schemaCustomization;
  const { createFieldExtension } = actions;

  const parentPassthroughName = "parentPassthrough";
  const parentResolverPassthroughName = "parentResolverPassthrough";

  if (!fieldExtensions[parentPassthroughName]) {
    createFieldExtension({
      name: parentPassthroughName,
      args: {
        field: "String"
      },
      extend: options => ({
        resolve: parentPassthrough({
          field: options.field
        })
      })
    });
  }

  if (!fieldExtensions[parentResolverPassthroughName]) {
    createFieldExtension({
      name: parentResolverPassthroughName,
      args: {
        field: "String",
        parentType: "String"
      },
      extend: options => ({
        resolve: parentResolverPassthrough({
          field: options.field,
          parentType: options.parentType
        })
      })
    });
  }
};
