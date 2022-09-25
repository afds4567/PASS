import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tag, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
const data = [
  {
    key: '1',
    name: `KT, 테이블매니저에 전략 투자…'AI통화비서' 서비스 고도화`,
    age: `2022/09/25 10:43`,
    company: '뉴시스',
    keywords: ['AI', 'KT'],
    address:
      'AI통화비서 서비스 고도화 및 사업영역 확장을 위해 협력 KT “소상공인들에게 도움이 되는 AI 통화비서로 만들 것”',
  },
  {
    key: '2',
    name: 'SKT-사피온, 캐나다 토론토 대학서 AI 공동 연구',
    age: `2022/09/22 09:13`,
    company: '중앙',
    keywords: ['AI', 'SKT'],
    address:
      'SK텔레콤과 글로벌 AI 반도체 기업 사피온이 캐나다 토론토 대학에 AI 반도체 기반 데이터 센터인 ‘NPU 팜’을 제공하고, AI 공동 연구에 나선다. ',
  },
  {
    key: '3',
    name: '당근마켓 "AI로 동네상권 살릴 것”[AI코리아대상]',
    age: `2022/08/25 22:48`,
    company: '동아',
    keywords: ['AI', '당근마켓'],
    address:
      'AI로 중고거래 제한 물품 걸러내.. 중고거래 활성화 기여코로나 충격 소상공인, 스타트업 지원까지 탄탄한 AI 기반으로 3000만명 국민앱 달성',
  },
  {
    key: '4',
    name: '인간이 만든 AI 화가, 미술 시장을 뒤흔들다',
    age: `2022/08/30 13:11`,
    company: '한겨례',
    keywords: ['AI', '미술'],
    address: `명령어 맞춰 그림 그리는 AI 화가 ‘미드저니’
      30초에 4장…다만 원하는 그림 얻기는 어려워
      미술계 “AI는 소통 능력 부족…인간 못 넘어”
      “AI 창작물 시장 커진다…관련법 새로 만들어야”`,
  },
  {
    key: '5',
    name: 'SKT 엑스칼리버 반려견 아픈곳 찾아내는 AI 기술 선보여',
    age: `2022/07/30 14:49`,
    company: '한겨례',
    keywords: ['AI', 'SKT'],
    address: '환부, 84~97% 정확도로 1분내 탐지"…클라우드 기반 PC·모바일 서비스',
  },
];

const List = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeRecord, setActiveRecord] = useState(null);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: '제목',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: '신문사',
      dataIndex: 'company',
      key: 'company',
      width: '8%',
      ...getColumnSearchProps('company'),
    },
    {
      title: '작성 시간',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: '키워드',
      dataIndex: 'keywords',
      key: 'keywords',
      width: '20%',
      render: (_, { keywords }) => (
        <>
          {keywords.map((keyword) => {
            let color = keyword === 'AI' ? 'geekblue' : 'green';
            if (keyword === 'SKT') color = 'volcano';
            if (keyword === 'loser') {
              color = 'volcano';
            }

            return (
              <Tag color={color} key={keyword}>
                {keyword.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '기사 요약 내용',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              setActiveRecord(record);
              setIsModalVisible(true);
            },
          };
        }}
      />
      <Modal
        title="상세 내용"
        visible={isModalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {/* render whatever you want based on your record */}
        <h1>{activeRecord?.name} </h1>
        <p>{activeRecord?.address}</p>
      </Modal>
    </>
  );
};

export default List;
