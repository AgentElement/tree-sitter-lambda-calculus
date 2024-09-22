package tree_sitter_lambda_calculus_test

import (
	"testing"

	tree_sitter "github.com/smacker/go-tree-sitter"
	"github.com/tree-sitter/tree-sitter-lambda_calculus"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_lambda_calculus.Language())
	if language == nil {
		t.Errorf("Error loading LambdaCalculus grammar")
	}
}
