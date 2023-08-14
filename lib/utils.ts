import { FireDataFilter } from "./types";

export const filter = (filter: FireDataFilter) => {
    console.log("Adfjkladslkfj;lakjdl;kfjlajdsljfl;jlajsdlfj;lkasdjflkjdaslk");
    
  const filterString = [];
  for (let key in filter) {
    if (filter[key as keyof FireDataFilter]) {
      filterString.push(`${key}='${filter[key as keyof FireDataFilter]}'`);
    }
  }

  if (filterString.length > 0) {
    return filterString.join(" AND ");
  }
  return "";
};

export const getAllWildfires = (
  count: string,
  FIRE_CAUSE: string,
  FIRE_STATUS: string,
  GEOGRAPHIC_DESCRIPTION: string
) => {
  if (FIRE_CAUSE || FIRE_STATUS || GEOGRAPHIC_DESCRIPTION) {
    return `https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=pub:WHSE_LAND_AND_NATURAL_RESOURCE.PROT_CURRENT_FIRE_PNTS_SP&cql_filter=${filter(
      { FIRE_CAUSE, FIRE_STATUS, GEOGRAPHIC_DESCRIPTION }
    )}&outputFormat=application%2Fjson`;
  }
  if (count) {
    return `https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=pub:WHSE_LAND_AND_NATURAL_RESOURCE.PROT_CURRENT_FIRE_PNTS_SP&outputFormat=application%2Fjson&count=${count}`;
  }
  return `https://openmaps.gov.bc.ca/geo/pub/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=pub:WHSE_LAND_AND_NATURAL_RESOURCE.PROT_CURRENT_FIRE_PNTS_SP&outputFormat=application%2Fjson`;
};
