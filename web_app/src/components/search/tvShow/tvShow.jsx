 /* eslint-disable */ 
import React from "react";
import styled from "styled-components";

const TvShowContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img {
    width: auto;
    height: 100%;
  }
`;

const Name = styled.h3`
  font-family: 'Manrope', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  color: #000;
  padding: 5px;
  flex: 2;
  display: flex;
  max-width: 500px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

export function TvShow(props) {
  const {key, name, match, gene, phenotype_hom, phenotype_het, omin_name, dd_name} = props;

  return (
    <TvShowContainer onClick={()=>console.log("ga")}>
      {/* <Rating>{name}</Rating> */}
      {/* <Name>{match.replace("|", ", ")}</Name> */}
      <Name>
        <a href={"https://www.genecards.org/cgi-bin/carddisp.pl?gene=" + gene} target="_blank" rel="noopener noreferrer" style={{ color: 'blue'}}>{gene}</a>
      </Name>
      <Name>{phenotype_hom.replaceAll("|", ", ")}</Name>
      <Name>{phenotype_het.replaceAll("|", ", ")}</Name>
      <Name>{omin_name}</Name>
      <Name>{dd_name}</Name>
    </TvShowContainer>
  );
}
