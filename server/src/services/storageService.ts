import { PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';
import { client, BUCKET_NAME } from '../config/s3Client'

export async function uploadArtwork(
  fileBuffer: Buffer,
  originalName: string,
  mimeType: string,
): Promise<string> {
  const extension = originalName.split('.').pop();
  const key = `${uuidv4()}.${extension}`;

  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: mimeType,
    })
  );

  const publicUrl = `${process.env.SUPABASE_PROJECT_URL}/storage/v1/object/public/${BUCKET_NAME}/${key}`;

  return publicUrl;
}

export async function deleteImage(key: string): Promise<void> {
  await client.send(
    new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    })
  );
}