import { useGetWildFiresData } from "@/hooks/useGetWildFiresData";
import { FilterSelect } from "../FilterSelect/FilterSelect";
import WildfireDetails from "./WildFireDetails";

/**
 * Renders the WildFires data.
 */
export const WildFires = () => {
  const {
    data,
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
  } = useGetWildFiresData(100);
  return (
    <div className="flex min-h-screen flex-col p-10 max-w-full">
      <h1 className="text-4xl font-bold">FIRES</h1>
      <div className="flex flex-row w-full">
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
