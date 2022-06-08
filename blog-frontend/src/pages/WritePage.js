import React from 'react'
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButonContainer from '../containers/write/WriteActionButonContainer';
const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButonContainer />
    </Responsive>

  )
}

export default WritePage