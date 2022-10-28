gene=$( sort -R ../_data/random_gene_set.txt | head -n1 )
jq -n --arg gene "$gene" '{name: $gene}' > ../_data/selected_gene.json