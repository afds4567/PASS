import React from 'react';
import styled, { css } from 'styled-components';
import PostCard from './PostCard';

const feedArticles = [
  {
    id: '1',
    thumbnail: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    content: `KT, 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    age: `2022/09/25 10:43`,
    company: '뉴시스',
    tags: ['AI', 'KT'],
    address:
      'AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”',
  },
  {
    id: '2',
    thumbnail:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    content: `KT, 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    age: `2022/09/25 10:43`,
    company: '뉴시스',
    keywords: ['AI', 'KT'],
    address:
      'AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”',
  },
];

const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  /* margin-left: 10rem; */
  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-left: 0;
    width: 100%;
  }
`;

const PostCards = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  width: 100%;
  ${(props) =>
    props.listNone
      ? css`
          height: 100vh;
        `
      : css`
          height: 100%;
        `}
  @media only screen and (max-width: 1179px) {
    justify-content: center;
  }
`;
const PostNone = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  font-size: 2rem;
  font-family: 'GS-M';
  letter-spacing: -0.6px;
 
  margin-top: 10rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;
const New = () => {
  return (
    <Post>
      {/* {props.id ? null : (
        <PostTop>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p style={{ fontFamily: 'GS-B', fontSize: '2rem', color: '#707bf3' }}>
              {isSearch ? `${item}에 대한 검색 결과` : title}
            </p>
            {item === 'main' && (
              <Select onChange={handleFilter} value={filter}>
                <option className="option" value="score">
                  인기순
                </option>
                <option className="option" value="created_at">
                  최신순
                </option>
              </Select>
            )}
          </div>
        </PostTop>
      )} */}
      <PostCards listNone={feedArticles.length === 0}>
        {feedArticles.length !== 0 ? (
          feedArticles.map((article, index) => (
            <PostCard key={('postcard', index)} post={article} />
          ))
        ) : (
          <div>"NO"</div>
        )}
      </PostCards>
    </Post>
  );
};

export default New;
