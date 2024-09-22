/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

// abs := \ id . term
// term := lambda | lambda term
// lambda := abs | ( term ) | id
// main := lambda EOF

module.exports = grammar({
  name: 'lambda_calculus',

  rules: {
    source_file: $ => repeat($.expression),
    expression: $ => choice(
      field("function", $.abstraction),
      seq('(', $.term, ')'),
      field("var", $.ident),
    ),
    ident: $ => /[a-z][a-z0-9_]*/,
    abstraction: $ => seq(
      '\\',
      field("capture", $.ident),
      '.',
      field("body", $.term)),
    term: $ => choice(
      $.expression,
      prec.left(1, seq($.expression, $.term))
    ),
  }
});
