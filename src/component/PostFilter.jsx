import React from "react";
import MySelect from "./UI/select/MySelect";
import { MyInput } from "./UI/input/MyInput";

function PostFilter({ filter, setFilter }) {

  return (
    <>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск"
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />

    </>
  )
}

export default PostFilter;