import { useGetWildFiresData } from "@/hooks/useGetWildFiresData";

/**
 * Renders the WildFires data.
 */
export const WildFires = () => {
  const {
    data,
  } = useGetWildFiresData(100);
  return (
    <div>
      <h1>WildFires</h1>
      {data.map((wildFire) => (<p>{wildFire.properties.GEOGRAPHIC_DESCRIPTION}</p>))}
    </div>
  );
};
