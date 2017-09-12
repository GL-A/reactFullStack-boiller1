import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;
export default function SelectDropdown(props){
  return(
    <Select
      onChange={(value) => props.update(value)}
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      placeholder="Select a category"
      size="large"
      defaultValue={props.defaultValue}
      style={props.selectStyle}
      >
      {props.array
      .map((cat, idx) => (
        <Option value={cat.toLowerCase()} key={idx}>{cat}</Option>
      ))}
    </Select>
  )
}
