---
layout: default
title: Gene of the day
parent: Menu
---

<ul>
{% assign gene = site.data.selected_gene.name %}
</ul>

The gene of the day is **{{ gene }}**!

We can display information (pre-rendered or extracted from some database) in here about that gene. We can use the 
variable (The gene name above is a variable) to select the information about that gene to display it here.

A github action runs a cron job every day to select a new gene and push it to the repository.