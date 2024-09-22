# tree-sitter-lambda-calculus

Now even pure lambda calculus has context-aware syntax highlighting!

***
## Usage
You will have to clone the repo locally

If you are using neovim, then ensure that you have the `nvim-treesitter`
plugin installed, and add the following lua snippet to your plugin
configuration file.

```lua
local parser_config = require "nvim-treesitter.parsers".get_parser_configs()
parser_config.lambda_calculus = {
    install_info = {
        url = "<PATH/TO/CLONED/REPO>",      -- TODO: Change this to your own path
        files = { "src/parser.c" },
        -- optional entries:
        branch = "main",
        generate_requires_npm = false,
        requires_generate_from_grammar = false,
    },
    filetype = "lc",
}
```
