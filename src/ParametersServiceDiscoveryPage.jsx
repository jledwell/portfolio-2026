import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles/ContentPage.css'
import ImageCaption from './ImageCaption'
import {
  parametersServiceDiscoveryContentData,
} from './parametersServiceDiscoveryContentData'

const SIDE_BY_SIDE_HEADINGS = new Set(['Results', 'Detailed Outcomes'])

function SectionText({ section }) {
  const paragraphs = section.paragraphs?.length
    ? section.paragraphs
    : section.paragraph
      ? [section.paragraph]
      : []

  return (
    <div className="content-text">
      <h2>{section.heading}</h2>
      {paragraphs.map((text, paragraphIndex) => (
        <p key={paragraphIndex}>{text}</p>
      ))}
      {section.bulletPoints?.length ? (
        <ul
          className={
            section.heading === 'Situation' || section.heading === 'Results'
              ? 'content-list content-list--situation'
              : 'content-list'
          }
        >
          {section.bulletPoints.map((point, pointIndex) => (
            <li key={pointIndex}>{point}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function SectionMedia({ section }) {
  if (section.pullQuote) {
    return (
      <div className="content-image content-image--pull-quote">
        <blockquote className="content-pull-quote">
          <p>{section.pullQuote}</p>
        </blockquote>
      </div>
    )
  }

  if (!section.imagePath && !section.imageLabel) return null

  const image = (
    <img src={section.imagePath} alt="" className="content-graphic" />
  )

  return (
    <div className="content-image">
      {section.imagePath ? (
        <figure className="content-image-wrap">
          {section.win95Dialog ? (
            <div className="win95-dialog">
              <div className="win95-dialog-titlebar" aria-hidden="true">
                <span className="win95-dialog-title">
                  {section.dialogTitle || 'Dialog'}
                </span>
                <span className="win95-dialog-close">
                  <span className="win95-dialog-close-x" />
                </span>
              </div>
              <div className="win95-dialog-body">{image}</div>
            </div>
          ) : (
            image
          )}
          <ImageCaption caption={section.imageCaption} />
        </figure>
      ) : (
        <div className="placeholder-graphic">{section.imageLabel}</div>
      )}
    </div>
  )
}

function ParametersServiceDiscoveryPage() {
  useEffect(() => {
    document.title = 'Discovery to Outcomes: Parameters Service'
  }, [])

  const contentBlocks = []
  for (let i = 0; i < parametersServiceDiscoveryContentData.length; i++) {
    const section = parametersServiceDiscoveryContentData[i]
    const next = parametersServiceDiscoveryContentData[i + 1]
    if (
      section.heading === 'Results' &&
      next?.heading === 'Detailed Outcomes'
    ) {
      contentBlocks.push({ type: 'pair', sections: [section, next] })
      i += 1
    } else {
      contentBlocks.push({ type: 'section', section })
    }
  }

  return (
    <div className="content-page content-page--parameters-service-discovery">
      <Link to="/" className="content-back-link">
        ← Back to Portfolio
      </Link>
      <h1 className="content-page-title">
        Discovery to Outcomes: Parameters Service
      </h1>
      <hr className="content-page-title-divider" aria-hidden="true" />
      {/* Tags hidden; data kept in parametersServiceDiscoveryContentTags */}
      {/* Summary grid (Goals → Outcomes) hidden; data kept in parametersServiceDiscoverySummaryColumns */}
      <div className="content-column">
        {contentBlocks.map((block, index) => {
            if (block.type === 'pair') {
              return (
                <div key={index} className="content-section-pair">
                  {block.sections.map((section) => (
                    <SectionText key={section.heading} section={section} />
                  ))}
                </div>
              )
            }

            const { section } = block
            const isFull =
              section.heading === 'Analysis' ||
              section.heading === 'Discovery & Insights' ||
              section.heading === 'Actions' ||
              section.heading === 'Next Steps' ||
              SIDE_BY_SIDE_HEADINGS.has(section.heading) ||
              (!section.imagePath && !section.imageLabel && !section.pullQuote)

            return (
              <div
                key={index}
                className={
                  isFull
                    ? 'content-section content-section--full'
                    : 'content-section'
                }
              >
                <SectionText section={section} />
                <SectionMedia section={section} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ParametersServiceDiscoveryPage
