/** Hairline + caption below an image. Renders nothing when caption is empty. */
export default function ImageCaption({ caption }) {
  if (!caption) return null

  return (
    <>
      <hr className="content-image-caption-divider" aria-hidden="true" />
      <figcaption className="content-image-caption">{caption}</figcaption>
    </>
  )
}
