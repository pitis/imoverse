import {
  useMutation,
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import type { LandPlotDTO, PhotoDTO, PlotDocumentDTO } from '../openapi'
import {
  LandPlotListingControllerService,
  PhotoControllerService,
  PlotDocumentControllerService,
} from '../openapi'

// ============= Query Keys =============

export const landPlotKeys = {
  all: ['landPlots'] as const,
  lists: () => [...landPlotKeys.all, 'list'] as const,
  list: (filters?: any) => [...landPlotKeys.lists(), filters] as const,
  details: () => [...landPlotKeys.all, 'detail'] as const,
  detail: (id: number) => [...landPlotKeys.details(), id] as const,
  count: (filters?: any) => [...landPlotKeys.all, 'count', filters] as const,
}

export const photoKeys = {
  all: ['photos'] as const,
  lists: () => [...photoKeys.all, 'list'] as const,
  list: (filters?: any) => [...photoKeys.lists(), filters] as const,
  details: () => [...photoKeys.all, 'detail'] as const,
  detail: (id: number) => [...photoKeys.details(), id] as const,
}

export const documentKeys = {
  all: ['documents'] as const,
  lists: () => [...documentKeys.all, 'list'] as const,
  list: (filters?: any) => [...documentKeys.lists(), filters] as const,
  details: () => [...documentKeys.all, 'detail'] as const,
  detail: (id: number) => [...documentKeys.details(), id] as const,
}

// ============= Land Plot Hooks =============

/**
 * Get all land plots with filters
 */
export const useLandPlots = (params?: {
  page?: number
  size?: number
  sort?: Array<string>
  [key: string]: any
}) => {
  return useQuery({
    queryKey: landPlotKeys.list(params),
    queryFn: () => {
      if (!params) {
        return LandPlotListingControllerService.getAllLandPlots()
      }
      const { page, size = 20, sort } = params
      // The function has many parameters - we'll use type assertion for flexibility
      // Pass undefined for all filter params, then page, size, sort at the end
      return (LandPlotListingControllerService.getAllLandPlots as any)(
        undefined, // idGreaterThan
        undefined, // idLessThan
        undefined, // idGreaterThanOrEqual
        undefined, // idLessThanOrEqual
        undefined, // ... (many more filter params)
        undefined, // distinct
        page,
        size,
        sort
      )
    },
  })
}

/**
 * Get all land plots with infinite scroll
 */
export const useInfiniteLandPlots = (baseParams?: {
  size?: number
  sort?: Array<string>
  [key: string]: any
}) => {
  return useInfiniteQuery({
    queryKey: landPlotKeys.list(baseParams),
    queryFn: ({ pageParam = 0 }) => {
      const { size = 20, sort } = baseParams || {}
      // The function has many parameters - we'll use type assertion for flexibility
      // Pass undefined for all filter params, then page, size, sort at the end
      return (LandPlotListingControllerService.getAllLandPlots as any)(
        undefined, // idGreaterThan
        undefined, // idLessThan
        undefined, // idGreaterThanOrEqual
        undefined, // idLessThanOrEqual
        undefined, // ... (many more filter params)
        undefined, // distinct
        pageParam,
        size,
        sort
      )
    },
    getNextPageParam: (lastPage, allPages) => {
      const pageSize = baseParams?.size || 20
      return lastPage.length === pageSize ? allPages.length : undefined
    },
    initialPageParam: 0,
  })
}

/**
 * Get single land plot by ID
 */
export const useLandPlot = (id: number, enabled = true) => {
  return useQuery({
    queryKey: landPlotKeys.detail(id),
    queryFn: () => LandPlotListingControllerService.getLandPlot(id),
    enabled: enabled && !!id,
  })
}

/**
 * Count land plots
 */
export const useLandPlotsCount = (params?: any) => {
  return useQuery({
    queryKey: landPlotKeys.count(params),
    queryFn: () => LandPlotListingControllerService.countLandPlots(params),
  })
}

/**
 * Create land plot
 */
export const useCreateLandPlot = () => {
  const queryClient = useQueryClient()

  return useMutation<LandPlotDTO, Error, LandPlotDTO>({
    mutationFn: (data) => LandPlotListingControllerService.createLandPlot(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: landPlotKeys.lists() })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.count() })
    },
  })
}

/**
 * Update land plot
 */
export const useUpdateLandPlot = () => {
  const queryClient = useQueryClient()

  return useMutation<LandPlotDTO, Error, { id: number; data: LandPlotDTO }>({
    mutationFn: ({ id, data }) =>
      LandPlotListingControllerService.updateLandPlot(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: landPlotKeys.detail(variables.id),
      })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.lists() })
    },
  })
}

/**
 * Partial update land plot
 */
export const usePartialUpdateLandPlot = () => {
  const queryClient = useQueryClient()

  return useMutation<
    LandPlotDTO,
    Error,
    { id: number; data: Partial<LandPlotDTO> }
  >({
    mutationFn: ({ id, data }) =>
      LandPlotListingControllerService.partialUpdateLandPlot(
        id,
        data as LandPlotDTO
      ),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: landPlotKeys.detail(variables.id),
      })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.lists() })
    },
  })
}

/**
 * Delete land plot
 */
export const useDeleteLandPlot = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, number>({
    mutationFn: (id) => LandPlotListingControllerService.deleteLandPlot(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: landPlotKeys.lists() })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.count() })
      queryClient.removeQueries({ queryKey: landPlotKeys.detail(id) })
    },
  })
}

// ============= Photo Hooks =============

/**
 * Get all photos
 */
export const usePhotos = (eagerload = true) => {
  return useQuery({
    queryKey: photoKeys.list({ eagerload }),
    queryFn: () => PhotoControllerService.getAllPhotos(eagerload),
  })
}

/**
 * Get single photo by ID
 */
export const usePhoto = (id: number, enabled = true) => {
  return useQuery({
    queryKey: photoKeys.detail(id),
    queryFn: () => PhotoControllerService.getPhoto(id),
    enabled: enabled && !!id,
  })
}

/**
 * Create photo
 */
export const useCreatePhoto = () => {
  const queryClient = useQueryClient()

  return useMutation<PhotoDTO, Error, PhotoDTO>({
    mutationFn: (data) => PhotoControllerService.createPhoto(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: photoKeys.lists() })
      // Also invalidate land plot details if photo is associated
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}

/**
 * Update photo
 */
export const useUpdatePhoto = () => {
  const queryClient = useQueryClient()

  return useMutation<PhotoDTO, Error, { id: number; data: PhotoDTO }>({
    mutationFn: ({ id, data }) => PhotoControllerService.updatePhoto(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: photoKeys.detail(variables.id),
      })
      queryClient.invalidateQueries({ queryKey: photoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}

/**
 * Partial update photo
 */
export const usePartialUpdatePhoto = () => {
  const queryClient = useQueryClient()

  return useMutation<PhotoDTO, Error, { id: number; data: Partial<PhotoDTO> }>({
    mutationFn: ({ id, data }) =>
      PhotoControllerService.partialUpdatePhoto(id, data as PhotoDTO),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: photoKeys.detail(variables.id),
      })
      queryClient.invalidateQueries({ queryKey: photoKeys.lists() })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}

/**
 * Delete photo
 */
export const useDeletePhoto = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, number>({
    mutationFn: (id) => PhotoControllerService.deletePhoto(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: photoKeys.lists() })
      queryClient.removeQueries({ queryKey: photoKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}

// ============= Document Hooks =============

/**
 * Get all plot documents
 */
export const useDocuments = (eagerload = true) => {
  return useQuery({
    queryKey: documentKeys.list({ eagerload }),
    queryFn: () => PlotDocumentControllerService.getAllPlotDocuments(eagerload),
  })
}

/**
 * Get single plot document by ID
 */
export const useDocument = (id: number, enabled = true) => {
  return useQuery({
    queryKey: documentKeys.detail(id),
    queryFn: () => PlotDocumentControllerService.getPlotDocument(id),
    enabled: enabled && !!id,
  })
}

/**
 * Create plot document
 */
export const useCreateDocument = () => {
  const queryClient = useQueryClient()

  return useMutation<PlotDocumentDTO, Error, PlotDocumentDTO>({
    mutationFn: (data) =>
      PlotDocumentControllerService.createPlotDocument(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: documentKeys.lists() })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}

/**
 * Update plot document
 */
export const useUpdateDocument = () => {
  const queryClient = useQueryClient()

  return useMutation<
    PlotDocumentDTO,
    Error,
    { id: number; data: PlotDocumentDTO }
  >({
    mutationFn: ({ id, data }) =>
      PlotDocumentControllerService.updatePlotDocument(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: documentKeys.detail(variables.id),
      })
      queryClient.invalidateQueries({ queryKey: documentKeys.lists() })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}

/**
 * Partial update plot document
 */
export const usePartialUpdateDocument = () => {
  const queryClient = useQueryClient()

  return useMutation<
    PlotDocumentDTO,
    Error,
    { id: number; data: Partial<PlotDocumentDTO> }
  >({
    mutationFn: ({ id, data }) =>
      PlotDocumentControllerService.partialUpdatePlotDocument(
        id,
        data as PlotDocumentDTO
      ),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: documentKeys.detail(variables.id),
      })
      queryClient.invalidateQueries({ queryKey: documentKeys.lists() })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}

/**
 * Delete plot document
 */
export const useDeleteDocument = () => {
  const queryClient = useQueryClient()

  return useMutation<any, Error, number>({
    mutationFn: (id) => PlotDocumentControllerService.deletePlotDocument(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: documentKeys.lists() })
      queryClient.removeQueries({ queryKey: documentKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: landPlotKeys.details() })
    },
  })
}
