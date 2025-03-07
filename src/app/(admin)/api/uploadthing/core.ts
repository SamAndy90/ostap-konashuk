import { type FileRouter, createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  mainImage: f({
    image: {
      maxFileSize: "8MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async () => {}),
  galleryUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 5,
    },
  }).onUploadComplete(async () => {}),
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } }) 
    .onUploadComplete(async ({ file }) => {
      console.log("Uploaded file URL:", file);
      return { fileUrl: file.ufsUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
