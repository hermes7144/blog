import React, { useEffect } from 'react'
import WriteActionButtons from '../../components/write/WriteActionButtons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButonContainer = ({ history }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,
  }));

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId)
    {
      dispatch(updatePost({ title, body, tags, id: originalPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post)
    {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError)
    {
      console.log(postError);
    }
  }, [navigate, history, post, postError])

  return (
    <WriteActionButtons onPublish={onPublish} onCancel={onCancel}
      isEdit={!!originalPostId} />
  )
}

export default WriteActionButonContainer