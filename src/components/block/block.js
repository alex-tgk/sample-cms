import React from 'react';
import HeroBlock from "../hero-block/hero-block";
import Header from "../header/header";

const BlockTypes = {
  Header: "header",
  HeroBlock: "hero-block",
}

const BlockComponentMappings = {
  [BlockTypes.Header]: Header,
  [BlockTypes.HeroBlock]: HeroBlock
}

/**
 *
 * @param {string} id
 * @param {string} type
 * @param content
 * @returns {JSX.Element}
 * @constructor
 */
const Block = ({id, type, content}) => {

  const Component = BlockComponentMappings[type]
  if (!Component) {
    throw Error('Invalid component supplied!')
  }
  return <Component {...content} />
};

export default Block;