import { v2, UploadApiErrorResponse, UploadApiResponse, UploadApiOptions, } from 'cloudinary';
import { promisify } from 'node:util';

type CloudinaryPromise = (
  file: string,
  options: UploadApiOptions
) => Promise<UploadApiResponse | undefined>;

const cloudinaryUpload: CloudinaryPromise = promisify(v2.uploader.upload);

export const uploads = (
  file: string,
  public_id: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> =>
  cloudinaryUpload(file, {
    public_id,
    overwrite,
    invalidate,
    resource_type: 'auto',
  });

export const videoUploads = (
  file: string,
  public_id: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> =>
  cloudinaryUpload(file, {
    public_id,
    overwrite,
    invalidate,
    chunk_size: 50000,
    resource_type: 'video',
  });
