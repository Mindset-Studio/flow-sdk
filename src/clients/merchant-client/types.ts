import * as z from 'zod'

export const associatedCommercePropsSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string()
})

export type AssociatedCommerceProps = z.infer<typeof associatedCommercePropsSchema>

export interface AssociatedCommerce {
  id: string
  name: string
  url: string
  createDate: string
  status: 0 | 1 | 2
  verifyDate: string | null
}

export interface DeleteCommerceResponse {
  status: string
  message: string
}

export const associatedCommerceListPropsSchema = z.object({
  start: z.number().optional(),
  limit: z.number().optional(),
  filter: z.string().optional(),
  status: z.enum(['0', '1', '2']).optional()

})
export type AssociatedCommercesListProps = z.infer<typeof associatedCommerceListPropsSchema>
