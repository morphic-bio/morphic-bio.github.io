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
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
  max-width: 200px;
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
  const {key, name, omim} = props;

  return (
    <TvShowContainer onClick={()=>console.log("ga")}>
      <Name>{name}</Name>
      <Name>{omim}</Name>
    </TvShowContainer>
  );
}
