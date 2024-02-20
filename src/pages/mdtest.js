import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';

export default function MDTest() {
  const mdfile = useGlobalData();

  console.log(mdfile);

  return <pre>{mdfile.stringify(mdfile)}</pre>;
}
