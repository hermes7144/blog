import React from 'react'
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import Palette from '../../lib/styles/palette'

const PostListBlock = styled(Responsive)`
  margin:top: 3rem
`;

const WritePostButtonWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;`

const PostList = () => {
  return (
    <div>PostList</div>
  )
}

export default PostList