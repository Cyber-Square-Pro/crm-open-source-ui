import React, { useEffect, useState } from "react";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { Table } from "../../../utils/types/common";
import CustomTable from "../../molecules/table";
import Search from "../../atoms/Search";
import { Dropdown } from "../../atoms";
import { Pagination } from "../../molecules";
import { PuffLoader } from "react-spinners";
import { DEFAULT_PAGE_SIZE, PAGE_SIZE } from "../../../utils/constants/constant";
import { MobileContext } from "../../../App";

interface Props {
  title: string;
  description?: string | undefined | null;
  api: MutationTrigger<any>;
  isLoading: boolean;
  formatter: (data: any) => Table;
  searchPlaceholder?: string | any;
  status?: Status[];
  additionalFeatures?: React.ReactNode;
  dropdown_placeholder?: string | any;
  payload?: {};
  defaultSelected?: string | undefined;
}

export interface Status {
  label: string;
  value: string;
}

const TableTemplate: React.FC<Props> = ({
  api,
  isLoading,
  searchPlaceholder,
  status,
  formatter,
  title,
  additionalFeatures = null,
  dropdown_placeholder,
  description = null,
  defaultSelected,
}) => {
  const [table, setTable] = useState<Table>({
    body: [],
    header: [],
  });
  const {isMobile} = React.useContext(MobileContext);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE.toString());
  const [{ page, total, totalPages }, setPageDetails] = useState({
    page: 1,
    total: 1,
    totalPages: 1,
  });

  const [filters, setFilters] = useState<{
    searchKeyword: string | undefined;
    status: string | undefined;
  }>({ searchKeyword: undefined, status: defaultSelected });

  useEffect(() => {
    callApi(page);
  }, [filters, pageSize]);

  const callApi = async (pg: any) => {
    let data: any = await api({
      language: "en",
      page: pg || page || 1,
      pageSize: pageSize,
      ...filters,
    });
    setTable(formatter(data.data));
    setPageDetails((s) => ({
      ...s,
      page: data?.data?.currentPage || 1,
      total: data?.data?.total || 0,
      totalPages: data?.data?.totalPages || 1,
    }));
  };

  return (
    <div className="">
    {/* <div className="p-3 lg:p-[30px]  bg-[#1C1F2C95] rounded-[10px]"> */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="pb-2">
          <p className="text-[#ECBE44] text-[32px] font-bold">{title}</p>
          <p className="text-primary text-[16px] tracking-wide">
            {description ?? ""}
          </p>
        </div>
        <div className="flex gap-5">
          {searchPlaceholder && (
            <Search
              onChange={(value: string) =>
                setFilters((s) => ({
                  ...s,
                  searchKeyword: !!value ? value : defaultSelected || undefined,
                }))
              }
              placeholder={searchPlaceholder}
            />
          )}
          {status && (
            <Dropdown
              error={null}
              name="test"
              onChange={(value: string) => {
                setFilters((s) => ({
                  ...s,
                  status: !!value && value !== "all" ? value : undefined,
                }));
              }}
              className={"w-80"}
              options={status}
              placeholder={
                status.find((obj) => obj.value === filters.status)?.label ||
                dropdown_placeholder ||
                "Select an option"
              }
            />
          )}
          {additionalFeatures}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center w-full">
          <PuffLoader color="#ECBE44" />
        </div>
      ) : (
        <div className={`pt-[30px] ${!isMobile ? "max-w-[calc(100vw-370px)]" : "" }`}>
          <CustomTable headers={table.header} itemList={table.body} />
          <div className="flex justify-between mt-[20px]">
            <Pagination
              onChange={(v) => {
                setPageDetails((s) => ({
                  ...s,
                  page: v,
                }));
                callApi(v);
              }}
              page={page}
              totalPages={totalPages}
            />
            <div className="flex gap-2 items-center">
              <Dropdown
                error={null}
                name="test"
                onChange={async (value: string) =>
                  setPageSize(value || DEFAULT_PAGE_SIZE.toString())
                }
                className={"w-20"}
                options={PAGE_SIZE}
                placeholder={pageSize}
                size={"small"}
              />

              <p className="text-[18px] text-[#ECBE44] ml-1 md:ml-2">{`${
                table?.body?.length ?? pageSize
              } of ${total || 0}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableTemplate;
