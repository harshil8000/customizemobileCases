import { OurFileRouter } from '@/app/api/uploadthing/core'
import { generateReactHelpers } from '@uploadthing/react'

// Generate helpers to interact with UploadThing
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>()
