import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  chakra,
  Flex,
  Text,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Tooltip,
} from "@chakra-ui/react";
import User from "components/User";
import type { Osnova } from "types/osnova";
import { useTable, useSortBy, usePagination, Column } from "react-table";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useMemo } from "react";

const columns: Column<Osnova.Likers.Liker>[] = [
  {
    Header: "Пользователь",
    accessor: (d) => d,
    Cell: ({
      value: { name, avatar_url, id },
    }: {
      value: Osnova.Likers.Liker;
    }) => <User name={name} avatar_url={avatar_url} id={id} />,
  },
  {
    Header: "+",
    accessor: "plus",
    isNumeric: true,
  },
  {
    Header: "-",
    accessor: "minus",
    isNumeric: true,
  },
  {
    Header: "Всего",
    accessor: "total",
    isNumeric: true,
  },
];

function TotalTable({ likers }: { likers: Osnova.Likers.Likers }) {
  const data = useMemo(() => [...Object.values(likers)], [likers]);
  // https://codesandbox.io/s/fxx0v?file=/src/App.js:968-998
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useSortBy, usePagination);

  return (
    <>
      <Table size="sm" {...getTableProps()}>
        <TableCaption>Статистика оценок по пользователям</TableCaption>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Flex justifyContent="space-between" m={4} alignItems="center" w="100%">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={2}
              aria-label="First Page"
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
              aria-label="Previous Page"
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink="0" mr={2}>
            <Text fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <NumberInput
            ml={2}
            mr={2}
            w={16}
            min={1}
            max={pageOptions.length}
            onChange={(value) => {
              const page = value ? +value - 1 : 0;
              gotoPage(page);
            }}
            display={{ base: "none", md: "inline-block" }}
            defaultValue={pageIndex + 1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
              aria-label="Next Page"
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={2}
              aria-label="Last page"
            />
          </Tooltip>
        </Flex>
      </Flex>
    </>
  );
}

export default TotalTable;
