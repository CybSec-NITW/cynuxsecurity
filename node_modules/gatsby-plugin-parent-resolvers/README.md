# Gatsby plugin: Parent Resolvers

When writing `gatsby-node` code, do you often find yourself writing something like the following?

```javascript
const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType("Mdx");
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName
  });
  return result;
};
```

(Taken from [gatsby-theme-blog-core](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-theme-blog-core/gatsby-node.js) as an example, no hate intended!)

If you do, _this is the plugin for you!_

## The resolvers

Because of the way Gatsby nodes are structured, there's two different resolvers
to use that are generally mutually exclusive.

How do you find out which one to use? I'd recommend trying `parentPassthrough`,
checking out the result, and then switching to `parentResolverPassthrough` if
the result is either nothing or not what you were expecting.

### parentPassthrough

This resolver passes the parent's value directly through to the child node,
without running any resolvers from the parent. Use this one for simple values
that are directly attached to the node on creation.

A notable example is Markdown/Mdx frontmatter.

#### Arguments

_field_  
Specified which field on the parent node that will be resolved.  
If not specified, will use the child field's name.

_defaultValue_  
The value that will be returned if it couldn't be resolved from the parent.

### parentResolverPassthrough

This resolver grabs the resolver from the parent node that corresponds with the
field being passed through to the child, then runs it and returns what that
resolver did. Use this one for fields that either aren't actually attached to
the node or require post-processing to be useful.

A notable example is the `body` field on `Mdx` nodes.

#### Arguments

In addition to the arguments `parentPassthrough` takes:

_typeName_  
The name of the Type whose resolvers will be used.  
When not specified, this is pulled from the parent node. I'm not actually sure where this will be useful, but it's here regardless. Maybe if you want the resolver from a node type that isn't the parent?

## How to use

Well, there's actually two different ways to use the plugin: the "resolver"
method, and the "extension" method.

Both are mostly equivalent, but only the resolver method supports default values
because extensions' options don't know the type of the field they're applied on.

### The resolver method

Just call the function as the value of the `resolve` key in your graphql type!

```javascript
const {
  parentPassthrough,
  parentResolverPassthrough
} = require("gatsby-plugin-parent-resolvers");
//...
schema.buildObjectType({
  name: "ResolverChild",
  fields: {
    id: { type: "ID!" },
    namedParentPassthrough: {
      type: "String!",
      resolve: parentPassthrough({ field: "exampleString" })
    },
    namedParentResolverPassthrough: {
      type: "String!",
      resolve: parentResolverPassthrough({ field: "resolvedFromNothing" })
    },
    exampleString: { type: "String!", resolve: parentPassthrough() },
    resolvedFromNothing: {
      type: "String!",
      resolve: parentResolverPassthrough()
    },
    intWithDefault: {
      type: "Int!",
      resolve: parentPassthrough({
        defaultValue: 42
      })
    }
  },
  interfaces: ["Node"]
});
```

### The extension method

First, add `gatsby-plugin-parent-resolvers` to your `gatsby-config` plugins.

From there, you can use the `parentPassthrough` and `parentResolverPassthrough`
just like any other extension in either the type builders or SDL!

#### Builder

```javascript
schema.buildObjectType({
  name: "BuilderExtensionChild",
  fields: {
    id: { type: "ID!" },
    namedParentPassthrough: {
      type: "String!",
      extensions: {
        parentPassthrough: {
          field: "exampleString"
        }
      }
    },
    namedParentResolverPassthrough: {
      type: "String!",
      extensions: {
        parentResolverPassthrough: {
          field: "resolvedFromNothing"
        }
      }
    },
    exampleString: {
      type: "String!",
      extensions: {
        parentPassthrough: {}
      }
    },
    resolvedFromNothing: {
      type: "String!",
      extensions: {
        parentResolverPassthrough: {}
      }
    }
  },
  interfaces: ["Node"]
});
```

#### SDL

```javascript
`type SDLExtensionChild implements Node {
  namedParentPassthrough: String! @parentPassthrough(field: "exampleString")
  namedParentResolverPassthrough: String! @parentResolverPassthrough(field: "resolvedFromNothing")
  exampleString: String! @parentPassthrough
  resolvedFromNothing: String! @parentResolverPassthrough
}`;
```

Also, you don't have to worry about `gatsby-plugin-parent-resolvers` being
loaded twice if you want to include it in a theme- the plugin checks to make
sure the extensions aren't already made!
