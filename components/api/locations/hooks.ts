import { useQuery } from '@tanstack/react-query'
import type {
  SirutaDTO,
  SirutaCountyDTO,
  SirutaLocalityDTO,
  PaginatedRecordsDTOSirutaDTO,
} from '../openapi'
import { SirutaControllerService } from '../openapi'

// ============= Query Keys =============

export const sirutaKeys = {
  all: ['siruta'] as const,
  allSiruta: (countryCode?: string) => [...sirutaKeys.all, 'all', countryCode] as const,
  regions: (countryCode: string) => [...sirutaKeys.all, 'regions', countryCode] as const,
  counties: (countryCode?: string) => [...sirutaKeys.all, 'counties', countryCode] as const,
  localities: (countyCode: string, countryCode?: string) =>
    [...sirutaKeys.all, 'localities', countyCode, countryCode] as const,
  queryLocality: (params?: any) => [...sirutaKeys.all, 'query-locality', params] as const,
  queryByParent: (params?: any) => [...sirutaKeys.all, 'query-by-parent', params] as const,
}

// ============= Siruta (Location) Hooks =============

/**
 * Get all Siruta entries
 */
export const useAllSiruta = (countryCode?: string) => {
  return useQuery<Array<SirutaDTO>>({
    queryKey: sirutaKeys.allSiruta(countryCode),
    queryFn: () => SirutaControllerService.getAllSiruta(countryCode),
  })
}

/**
 * Get Siruta regions
 */
export const useSirutaRegions = (countryCode: string, enabled = true) => {
  return useQuery<Array<SirutaDTO>>({
    queryKey: sirutaKeys.regions(countryCode),
    queryFn: () => SirutaControllerService.getSirutaRegions(countryCode),
    enabled: enabled && !!countryCode,
  })
}

/**
 * Get all Romanian counties
 */
export const useCounties = (countryCode: string = 'ROU') => {
  return useQuery<Array<SirutaCountyDTO>>({
    queryKey: sirutaKeys.counties(countryCode),
    queryFn: () => SirutaControllerService.getSirutaCounties(countryCode),
  })
}

/**
 * Get localities by county
 */
export const useLocalitiesByCounty = (
  countyCode: string,
  countryCode: string = 'ROU',
  enabled = true
) => {
  return useQuery<Array<SirutaLocalityDTO>>({
    queryKey: sirutaKeys.localities(countyCode, countryCode),
    queryFn: () =>
      SirutaControllerService.getSirutaLocalities(countyCode, countryCode),
    enabled: enabled && !!countyCode,
  })
}

/**
 * Query Siruta locality (search)
 */
export const useQuerySirutaLocality = (params: {
  searchText: string
  rows: number
  page: number
  countryCode?: string
}) => {
  return useQuery<PaginatedRecordsDTOSirutaDTO>({
    queryKey: sirutaKeys.queryLocality(params),
    queryFn: () =>
      SirutaControllerService.querySirutaLocality(
        params.searchText,
        params.rows,
        params.page,
        params.countryCode || ''
      ),
    enabled: !!params.searchText,
  })
}

/**
 * Query Siruta by parent
 */
export const useQuerySirutaByParent = (params: {
  rows: number
  page: number
  parentCode?: number
  countryCode?: string
  searchText?: string
}) => {
  return useQuery<PaginatedRecordsDTOSirutaDTO>({
    queryKey: sirutaKeys.queryByParent(params),
    queryFn: () =>
      SirutaControllerService.querySirutaByParent(
        params.rows,
        params.page,
        params.parentCode,
        params.countryCode || '',
        params.searchText
      ),
  })
}



