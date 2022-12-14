/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */

import Feedback from 'components/Feedback/Feedback';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import useDate from 'hooks/useDate';
import removeMarkdown from 'markdown-to-text';
import {
  Card,
  ThumbnailContainer,
  Thumbnail,
  Title,
  Content,
  Tag,
  Avatar,
  UserName,
  CreatedAt,
  CardBody,
  CardBottom,
  Line,
  TagContent,
} from './PostCardStyled';

const PostCard = ({ post }) => {
  //const navigate = useNavigate();

  // const emoJiLen = post.feedback.length;
  // const feedbackArr = [...post.feedback];

  // const [firstEmoji, setFirstEmoji] = useState('');
  // const [firstEmojiCount, setFirstEmojiCount] = useState(0);
  // const [secondEmoji, setSecondEmoji] = useState('');
  // const [secondEmojiCount, setSecondEmojiCount] = useState(0);
  // const [sortedFeedback] = useState(
  //   post.feedback &&
  //     feedbackArr.sort((a, b) => {
  //       return b.total - a.total;
  //     }),
  // );

  const handleTagsStyle = () => {
    const tags = document.querySelectorAll('.tag_list');

    tags.forEach((tag) => {
      const tagChildren = tag.childNodes;
      let tagWidth = 0;
      tagChildren.forEach((child) => {
        if (tagWidth + child.offsetWidth > 250) {
          child.style.display = ' none';
        }
        tagWidth += child.offsetWidth + 8;
      });
    });
  };

  useEffect(() => {
    // switch (emoJiLen) {
    //   case 0:
    //     setFirstEmoji('');
    //     setFirstEmojiCount(0);
    //     setSecondEmoji('');
    //     setSecondEmojiCount(0);
    //     break;
    //   case 1:
    //     setFirstEmoji(sortedFeedback[0].category);
    //     setFirstEmojiCount(sortedFeedback[0].total);
    //     setSecondEmoji('');
    //     setSecondEmojiCount(0);

    //     break;
    //   default:
    //     setFirstEmoji(sortedFeedback[0].category);
    //     setFirstEmojiCount(sortedFeedback[0].total);
    //     setSecondEmoji(sortedFeedback[1].category);
    //     setSecondEmojiCount(sortedFeedback[1].total);
    // }
    handleTagsStyle();
  });

  return (
    <Card
      onClick={() => {
        navigate(`/article/${post.id}`);
      }}
    >
      {post.thumbnail && (
        <ThumbnailContainer>
          <Thumbnail src={post.thumbnail} />
        </ThumbnailContainer>
      )}
      <CardBody thumbnail={post.thumbnail}>
        <Title>{post.title}</Title>
        <Content thumbnail={post.thumbnail}>
          <p>{(post.content)}</p>
        </Content>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* <TagContent className="tag_list">
            {Object.keys(post.tags).map((key) => (
              <Tag key={key}>{post.tags[key]}</Tag>
            ))}
          </TagContent> */}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CreatedAt>{(post.createdAt)}</CreatedAt>
          </div>
        </div>
      </CardBody>
      <Line />
      {/* <CardBottom>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            src={
              post.user.avatar ? post.user.avatar : `${process.env.PUBLIC_URL}/images/missing.png`
            }
          />
          <UserName>{post.user.username}</UserName>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Feedback
            firstEmoji={firstEmoji}
            secondEmoji={secondEmoji}
            firstEmojiCount={firstEmojiCount}
            secondEmojiCount={secondEmojiCount}
            emoJiLen={emoJiLen}
          />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>
            {post.feedbackCount - firstEmojiCount - secondEmojiCount !== 0 &&
              `+${post.feedbackCount - firstEmojiCount - secondEmojiCount}`}
          </p>
        </div>
      </CardBottom> */}
    </Card>
  );
};

export default PostCard;
