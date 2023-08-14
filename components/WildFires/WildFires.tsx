import { useGetWildFiresData } from "@/hooks/useGetWildFiresData";
import { FilterSelect } from "../FilterSelect/FilterSelect";
import WildfireDetails from "./WildFireDetails";
import { useRef } from "react";
import { CsvDownload } from "../CsvDownload/CsvDownload";

/**
 * Renders the WildFires data.
 */
export const WildFires = () => {
  const {
    data,
    csvData,
    requestState,
    fireStatus,
    fireStatusOptions,
    filterByFireStatus,
    fireCause,
    fireCauseOptions,
    filterByFireCause,
    geographicDescription,
    geographicDescriptionOptions,
    filterByGeographicDescription,
    onDownload,
  } = useGetWildFiresData(100);

  const csvInstance = useRef<any>();

  const createCsvDownload = (csvData: string) => {
    if (
        csvData &&
        csvInstance &&
        csvInstance.current &&
        csvInstance.current.link
      ) {
        csvInstance.current.link.click();
      }
  }

  return (
    <div className="flex min-h-screen flex-col p-10 max-w-full">
      <h1 className="text-4xl font-bold">BC Wildfires</h1>
      {/* Sticky header */}
      <div className="sticky top-0 bg-black z-10 py-4 px-2 shadow-md">
        <div className="flex flex-row w-full space-x-4">
          <FilterSelect
            label="Fire Status"
            selectedOption={fireStatus}
            options={fireStatusOptions}
            onChange={(selectedOption: string) =>
              filterByFireStatus(selectedOption)
            }
          />
          <FilterSelect
            label="Fire Cause"
            selectedOption={fireCause}
            options={fireCauseOptions}
            onChange={(selectedOption: string) =>
              filterByFireCause(selectedOption)
            }
          />
          <FilterSelect
            label="Geographic Description"
            selectedOption={geographicDescription}
            options={geographicDescriptionOptions}
            onChange={(selectedOption: string) =>
              filterByGeographicDescription(selectedOption)
            }
          />
        </div>
        <CsvDownload
          csvData={csvData}
          csvInstance={csvInstance}
          onDownload={() => onDownload(data)}
        />
      </div>
      {requestState.success && !!data.length && (
        <div className="flex flex-col items-center justify-center mt-[1rem]">
          {data.map((fire) => (
            <WildfireDetails wildfireData={fire.properties} />
          ))}
        </div>
      )}
      {requestState.pending && <p>Loading...</p>}
      {requestState.error && <p>Unable to get wildfire data</p>}
      {!data.length && <p>No wildfire data</p>}
    </div>
  );
};
