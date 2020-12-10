const parentPassthrough = ({ field, defaultValue = null } = {}) => async (
  source,
  args,
  context,
  info
) =>
  context.nodeModel.getNodeById({ id: source.parent })[
    field || info.fieldName
  ] || defaultValue;

const parentResolverPassthrough = ({
  field,
  defaultValue = null,
  typeName
} = {}) => async (source, args, context, info) => {
  const fieldName = field || info.fieldName;
  const parentNode = context.nodeModel.getNodeById({ id: source.parent });
  const schemaType = info.schema.getType(typeName || parentNode.internal.type);
  const resolver = schemaType.getFields()[fieldName].resolve;
  const result = await resolver(parentNode, args, context, { fieldName });
  return result || defaultValue;
};

module.exports = {
  parentPassthrough,
  parentResolverPassthrough
};
