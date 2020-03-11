import React from 'react'
import { Table, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import HeaderUser from '../components/layout/HeaderUser'

const data = 
  
  [{
    id: 1,
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
    prénom :"Benjamin",
    nom: "Jacobi",
    email:"email@gmail.com",  spécialité: "abc"
   
   
  }, {
    id: 2,
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",
    prénom :"Clementina",
    nom: "Hahn",
    email:"email@gmail.com",
    spécialité: "abc",
   
  }]


 export default class All extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Nom',
        dataIndex: 'nom',
        key: 'nom',
        width: '30%',
        ...this.getColumnSearchProps('nom'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: '20%',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'Spécialité',
        dataIndex: 'spécialité',
        key: 'spécialité',
        ...this.getColumnSearchProps('spécialité'),
      },
    ];

    return <div><HeaderUser></HeaderUser>
    <Table columns={columns} dataSource={data} /></div>;
  }
}
