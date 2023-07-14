import React from "react";
import styled from "styled-components";
import { IoClose, IoSearch, IoTriangle } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { useEffect } from "react";
import { useRef } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from "../../../hooks/debounceHook";
import axios from "axios";
import { TvShow } from "../tvShow/tvShow";
import { THeader } from "../tvShow/tHeader";

import Data from '../data/gene_list'

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
  background-color: #fff;

`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;

  background-color: #fff;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeperator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em, 1em, 1em, 1em;
  overflow-y: auto;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

export function SearchBar(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);
  const [noTvShows, setNoTvShows] = useState(false);
  const [searchCategory, setSearchCatergory] = useState("gene_symbol")
  const selectedCategoryLabel = {all: "All", gene_symbol: "gene", hgnc_id: "hgnc id", impc_phenotypes_homozygote: "phenotypes homozygote", impc_phenotypes_heterozygote: "phenotypes heterozygote", omim_name: "omim name", dd_name: "dd name"}

  const isEmpty = !tvShows || tvShows.length === 0;

  const changeCategory = (event) => {
    collapseContainer()
    setSearchCatergory(event.target.value);
  }

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() === "") setNoTvShows(false);

    setSearchQuery(e.target.value);
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setNoTvShows(false);
    setTvShows([]);
    if (inputRef.current) inputRef.current.value = "gene_symbol";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const searchTvShow = () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);
    setNoTvShows(false);

    const matchedGenes = []
    for (const [k, v] of Object.entries(Data)) {
      // if (k.toLowerCase().includes(searchQuery.toLocaleLowerCase())) {
      //   matchedGenes.push(Data[k])
      // }

      for (const [key, value] of Object.entries(v)) {
        if (!(key === "gene_symbol" || key === "hgnc_id" || 
              key === "impc_phenotypes_homozygote" || key === "impc_phenotypes_heterozygote" || 
              key === "omim_name" || key === "dd_name")) {
          continue
        }
        if (key === searchCategory || key === "all")
        if (value.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())) {
          matchedGenes.push([v, key])
          break
        }
      }
    }
    console.log("matched genes ", matchedGenes)
    console.log(Object.keys(Data).length)

    if (matchedGenes.length == 0) {
      setNoTvShows(true)
    }

    setTvShows( () => {
      return matchedGenes;
    });

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchTvShow);

  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <SearchInputContainer>
        <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', paddingRight: '1em', width: 'auto'}}>
          <div style={{display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <span style={{ width: '120px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{selectedCategoryLabel[searchCategory]}</span>
            <IoTriangle style = {{transform: 'rotate(180deg)' }} />
          </div>
          <label htmlFor="" style={{ display: 'none' }}>Select the gene category you want to search.</label>
          <select name="" id="" title="Search gene" onChange={changeCategory} value={searchCategory} style={{ opacity: 0, position: 'absolute' }}>
            <option value="all">All</option>
            <option selected value="gene_symbol">gene</option>
            <option value="hgnc_id">hgnc id</option>
            <option value="impc_phenotypes_homozygote">phenotypes homozygote</option>
            <option value="impc_phenotypes_heterozygote">phenotypes heterozygote</option>
            <option value="omim_name">omim name</option>
            <option value="dd_name">dd name</option>
          </select>
        </div>
        {!isExpanded && (
          <SearchIcon>
            <IoSearch />
          </SearchIcon>
        )}
        <SearchInput
          placeholder="Search gene"
          onFocus={expandContainer}
          ref={inputRef}
          value={searchQuery}
          onChange={changeHandler}
        />
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      {isExpanded && <LineSeperator />}
      {isExpanded && (
        <SearchContent>
          {isLoading && (
            <LoadingWrapper>
              <MoonLoader loading color="#000" size={20} />
            </LoadingWrapper>
          )}
          {!isLoading && isEmpty && !noTvShows && (
            <LoadingWrapper>
              <WarningMessage>
                Start typing a {(searchCategory === "all") ? "gene symbol / hgnc id / phenotypes / omim name / dd name" : searchCategory.replace("_", " ")}.
              </WarningMessage>
            </LoadingWrapper>
          )}
          {!isLoading && noTvShows && (
            <LoadingWrapper>
              <WarningMessage>No matches in the pilot phase gene list.</WarningMessage>
            </LoadingWrapper>
          )}
          {!isLoading && !isEmpty && (
            <>
              <THeader
                gene="gene"
                phenotype_hom="JAX"
                phenotype_het="MSK"
                omin_name="NWU"
                dd_name="UCSF"
              />
              {tvShows.map(( show ) => (
                <TvShow
                  key={show[0].hgnc_id}
                  name={show[1]}
                  match={show[0][show[1]]}
                  gene={show[0]["gene_symbol"]}
                  phenotype_hom={show[0]["JAX"]}
                  phenotype_het={show[0]["MSK"]}
                  omin_name={show[0]["NWU"]}
                  dd_name={show[0]["UCSF"]}
                />
              ))}
            </>
          )}
        </SearchContent>
      )}
    </SearchBarContainer>
  );
}
