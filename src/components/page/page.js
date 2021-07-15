import React from 'react';
import Block from "../block/block";

const Page = ({blocks}) => {

  return (
    <div className={'page-container'}>
      {
        blocks.map(
          (block) => (
            <Block key={`block-${block.id}`} {...block} />
          )
        )
      }
    </div>
  );
};

export default Page;