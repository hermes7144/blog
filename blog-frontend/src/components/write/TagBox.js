import React from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
  width:100%;
  border-top: 10x solid ${palette.gray[2]};
  padding-top: 2rem;

  h4 {
    color: ${palette.gray[8]}
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
`
const Tag = styled.div`
`
const TagListBlock = styled.div`

`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag }) => <Tag>#{tag}</Tag>);

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags }) => (
  <TagListBlock>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm>
        <input placeholder='태그를 입력하세요' />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={['태그1', '태그2', '태그3']} />
    </TagBoxBlock>
  )
}

export default TagBox