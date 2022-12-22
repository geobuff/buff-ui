import React from "react";

import { Input, InputGroup, InputLeftElement, Select } from "@chakra-ui/react";

import { Search } from "../../Icons";
import { TableFilters, TableFiltersProps } from "./TableFilters";

export default {
  title: "Table/TableFilters",
  component: TableFilters,
};

const Template = (args: TableFiltersProps) => <TableFilters {...args} />;

const leftContent = (
  <Select
    maxWidth={{ base: "100%", sm: "100%", md: "235px" }}
    boxShadow="0px 3px 4px rgba(226, 227, 227, 0.5)"
    height="42px"
    borderColor="transparent"
    background="#FFFFFF"
    borderRadius={8}
    fontWeight="bold"
  >
    <option value={null}>{"All"}</option>
    <option value="week">{"Week"}</option>
    <option value="day">{"Today"}</option>
  </Select>
);

const rightContent = (
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <Search
        marginTop="6px"
        marginLeft="12px"
        height="24px"
        width="24px"
        color="gray.500"
      />
    </InputLeftElement>
    <Input
      background="#FFFFFF"
      boxShadow="0px 3px 4px rgba(226, 227, 227, 0.5)"
      borderRadius={8}
      height="42px"
      marginLeft="auto"
      paddingLeft="46px"
      placeholder={"Enter username..."}
      _disabled={{ backgroundColor: "transparent", opacity: 0.4 }}
      _placeholder={{ color: "gray.500" }}
      _hover={{ border: "1px solid #CBD5E0" }}
    />
  </InputGroup>
);

export const Default = Template.bind({});
Default.args = {
  leftContent,
  rightContent,
};
